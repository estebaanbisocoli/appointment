import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { genSalt, hash, compare } from "bcrypt";
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
UserSchema.pre("save", async function(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const salt = await genSalt(10);
    const passwordHash = await hash(user.password, salt);
    user.password = passwordHash;
    next();
  } catch (error) {
    console.log(error);
  }
});
UserSchema.methods.comparePassword = function(candidatePassword) {
  const password = this.password;
  return new Promise(async (resolve, reject) => {
    try {
      const matches = await compare(candidatePassword, password);
      if (matches) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject({ message: "Error comparing password hashes", error });
    }
  });
};

export default mongoose.model("User", UserSchema);
