import mongoose from "mongoose";
import Appointment from "./appointment";
const {
  Schema,
  Schema: {
    Types: { ObjectId }
  },
  model
} = mongoose;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  appointments: [{ type: ObjectId, ref: "Appointment" }]
});

export default mongoose.model("Client", ClientSchema);
