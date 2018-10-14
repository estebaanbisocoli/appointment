import mongoose from "mongoose";
import Appointment from "./models/appointment";
import Client from "./models/client";
import User from "./models/user";
// SET UP Mongoose Promises.
mongoose.Promise = global.Promise;
export const startDB = ({ url, db }) => {
  return mongoose.connect(
    `mongodb://${url}/${db}`,
    { useNewUrlParser: true, useCreateIndex: true }
  );
};

export const models = { Appointment, Client, User };
