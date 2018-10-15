import mongoose from "mongoose";
import Appointment from "./models/appointment";
import Client from "./models/client";
import User from "./models/user";
// SET UP Mongoose Promises.
mongoose.Promise = global.Promise;
export const startDB = uri => {
  return mongoose.connect(
    uri,
    { useNewUrlParser: true, useCreateIndex: true }
  );
};

export const models = { Appointment, Client, User };
