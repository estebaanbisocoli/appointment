require("dotenv").config();
import { connection } from "mongoose";
import { GraphQLServer } from "graphql-yoga";
import { startDB, models } from "./db";
import resolvers from "./graphql/resolvers";

startDB(process.env.MONGO_URI_DEV)
  .then(connection => {})
  .catch(e => {
    console.log("error connecting to mongodb", e.message);
  });
const context = {
  models,
  db: connection
};
const Server = new GraphQLServer({
  typeDefs: `${__dirname}/graphql/schema.graphql`,
  resolvers,
  context
});
const options = {
  port: 4000
};
Server.start({ port: 4000 }, () => {
  console.log(`Server running in port 4000`);
});
console.log(GraphQLServer);
