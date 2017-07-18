var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  title: {type: String, required: true},
  content: {type: String, required: true},
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
