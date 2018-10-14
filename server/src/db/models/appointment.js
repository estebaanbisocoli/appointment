import mongoose from "mongoose";
const {
  Schema,
  model,
  Schema: {
    Types: { ObjectId }
  }
} = mongoose;

const AppointmentSchema = new Schema({
  start: {
    type: Date
  },
  end: {
    type: Date
  },
  client: { type: ObjectId, ref: "Client" }
});

export default mongoose.model("Appointment", AppointmentSchema);
