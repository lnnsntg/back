import mongoose from "mongoose";
const { Schema } = mongoose;


//=======================================================
const userSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  surname: String,
});

const User = mongoose.model("user", userSchema);

//=======================================================

module.exports = User

