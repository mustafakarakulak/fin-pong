const mongoose = require('mongoose');

const userSchema42 = new mongoose.Schema({
   username: String,
   displayName: String,

},
{
    timestamps: true,
}
);

const userModel42 = mongoose.model("User41",userSchema42);

module.exports = userModel42;