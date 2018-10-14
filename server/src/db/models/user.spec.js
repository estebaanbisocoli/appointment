import User from "./user";
const TEST_USER = { email: "esteban@gmail.com", password: "123451" };
describe("Test user model", () => {
  let user;
  require("../../utils/mongoose");
  beforeEach(async () => {
    const toSaveUser = new User(TEST_USER);
    user = await toSaveUser.save(user);
  });
  afterEach(async () => {
    await User.deleteOne({ _id: user._id });
  });

  it("passwords should match", done => {
    User.findById(user._id).then(async user => {
      let matches = await user.comparePassword(TEST_USER.password);
      expect(matches).toBe(true);
      matches = await user.comparePassword("asdasdas");
      expect(matches).toBe(false);
      done();
    });
  });
});
