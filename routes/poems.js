var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Poem = require('../models/poem');
var User = require('../models/user');

// Routes here will have 'poem' appended to them.

router.get('/', function(req, res, next) {
  Poem.find()
    .populate('user', 'firstName')
    .exec(function(err, poems) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: poems  // You can use something other than 'obj' but this must match what's used in the frontend.
      });
    });
});

router.use('/', function(req, res, next) {
  jwt.verify(req.query.token, 'secret', function(err, token) {
    if (err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    next();
  });
});

router.post('/', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    var poem = new Poem({
      title: req.body.title,
      content: req.body.content,
      user: user
    });
    poem.save(function(err, result){
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      user.poems.push(result);
      user.save();
      res.status(201).json({
        message: 'Poem saved',
        obj: result // 'result' is the contents of the saved message
      });
    });
  });
});

router.patch('/:id', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  Poem.findById(req.params.id, function(err, poem) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
   if (!poem) {
      return res.status(500).json({
        title: 'Poem not found',
        error: {message: 'Poem not found'}
      });
    }
    if ( poem.user != decoded.user._id ) { // poem.user is just the user ID
      return res.status(401).json({
        title: 'Not Authenticated',
        error: {message: 'Users do not match'}
      });
    }
    poem.content = req.body.content;
    poem.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Poem updated',
        obj: result // 'result' is the contents of the saved message
      });
    });
  });
});

router.delete('/:id', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  Poem.findById(req.params.id, function(err, poem) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
   if (!poem) {
      return res.status(500).json({
        title: 'Poem not found',
        error: {message: 'Poem not found'}
      });
    }
    if ( poem.user != decoded.user._id ) { // poem.user is just the user ID
      return res.status(401).json({
        title: 'Not Authenticated',
        error: {message: 'Users do not match'}
      });
    }
    poem.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Poem deleted',
        obj: result // 'result' is the contents of the saved message
      });
    });
  });
});

module.exports = router;
