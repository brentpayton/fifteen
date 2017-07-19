var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
  content: {type: String, required: true},
  title: {type: String, required: false},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: {type: Date, required: false},
  isComplete: {type: Boolean, default: false, required: false},
  isHidden: {type: Boolean, default: false, required: false}
});

schema.post('remove', function(poem) {
  User.findById(poem.user, function(err, user) {
    user.poems.pull(poem);
    user.save();
  });
});

module.exports = mongoose.model('Poem', schema);
