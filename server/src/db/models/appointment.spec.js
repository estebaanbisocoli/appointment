import Appointment from "./appointment";
import Client from "./client";
const CLIENT = { name: "esteban" };
const APPOINTMENT = { start: new Date(Date.now()), end: new Date(Date.now()) };
describe("appointment test", () => {
  let client;
  require("../../utils/mongoose");
  beforeEach(async () => {
    const clientTest = new Client(CLIENT);
    client = await clientTest.save();
  });
  afterEach(async () => {
    await Client.deleteOne({ _id: client._id });
  });
  it("should be a client Created", async () => {
    const myclient = await Client.findById(client._id);
    expect(myclient._id).toEqual(client._id);
  });
});
