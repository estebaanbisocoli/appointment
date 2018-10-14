import { constants } from "perf_hooks";

export default {
  Query: {
    appointments: async (parent, args, { models }) => {
      const Appointments = await models.Appointment.find({});
      return Appointments;
    }
  }
};
