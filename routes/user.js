var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user.js');

router.post('/', function (req, res, next) {
    var user = new User ({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: bcrypt.hashSync(req.body.password, 10),
      email: req.body.email
    });
    user.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
    }
    res.status(201).json({
      message: 'User created',
      obj: result
    });
  });
});

router.post('/signin', function(req, res, next) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!user) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Email or password incorrect'}
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Email or password incorrect'}
      });
    }
    var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
    res.status(200).json({
      message: 'Successfully logged in',
      token: token,
      userId: user._id
    });
  });
});

// Retrieve details about the logged-in user.
router.get('/current/:userId', function(req, res, next) {
  User.findOne({'_id' : req.params.userId}, 'firstName')
  .populate('user', 'firstName')
  .exec(function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    } else if (!user) {
      res.status(500).json({
        message: 'User not found',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        obj: user
      });
    }
  });
});

// Return all info about all users in the database.
router.get('/', function(req, res, next) {
  User.find({})
  // .populate('user', 'firstName')
  .exec(function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    } else if (!user) {
      res.status(500).json({
        message: 'User not found',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        obj: user
      });
    }
  });

});

module.exports = router;
