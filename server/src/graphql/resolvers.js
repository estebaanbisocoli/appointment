export default {
  Query: {
    user: async (parent, { _id }, { models }) => {
      const user = await models.User.findById(_id);

      return user;
    }
  },
  User: {
    clients: async (parent, { _id }, { models: { User, Client } }) => {
      console.log(parent);
      const clients = await Client.find({
        _id: {
          $in: parent.clients
        }
      });
      return clients;
    }
  },
  Mutation: {
    createUser: async (parent, args, { models }) => {
      const { email, password } = args;
      const User = await models.User.find({ email });
      if (User.length > 0) {
        console.log(User);
        throw new Error("The user already exists");
      }
      const newUser = new models.User({
        email,
        password
      });
      let savedUser;
      try {
        savedUser = await newUser.save();
      } catch (error) {
        throw new Error("Cannot save user");
      }
      return savedUser._id;
    },
    createClient: async (parent, args, { models }) => {
      const { name, _id } = args;
      let User;
      try {
        User = await models.User.findById(_id);
      } catch (error) {
        throw new Error("database error");
      }
      if (!User) {
        throw new Error("User not find");
      }
      const Client = new models.Client({ name });
      try {
        await Client.save();
      } catch (error) {
        throw new Error(error);
      }
      try {
        User.clients.push(Client._id);
        await User.save();
        return User._id;
      } catch (e) {}
    },
    createAppointment: async (parent, args, { models }) => {
      const { start, end, _id } = args;
    }
  }
};
