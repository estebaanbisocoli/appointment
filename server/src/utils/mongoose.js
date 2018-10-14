require("dotenv").config();
const mongoose = require("mongoose");
beforeAll(done => {
  mongoose.connect(process.env.MONGO_URI_TEST);
  mongoose.connection.once("connected", done);
});
afterAll(done => {
  mongoose.connection.close(done);
});
