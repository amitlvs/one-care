const Appointment = require("../model/booking");
module.exports.doBooking = async (req, res, next) => {
  try {
    var book = new Appointment(req.body);
    const bookingData = await book.save();

    res.json({ message: "Appointment is booked.", data: bookingData });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getBooking = async (req, res, next) => {
  try {
    const bookingData = await Appointment.find();

    res.json({ data: bookingData });
  } catch (error) {
    console.log(error);
  }
};
module.exports.editBooking = async (req, res, next) => {
  try {
    const bookingData = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!bookingData) {
      return res.json({ status: 400, message: "Unable to Update" });
    }
    console.log(bookingData);

    return res.json({ message: "Updated Successfully", data: bookingData });
  } catch (error) {
    return error;
  }
};
module.exports.deleteBooking = async (req, res, next) => {
  try {
    const bookingData = await Appointment.findByIdAndDelete(req.params.id);
    if (!bookingData) {
      return res.json({ status: 400, message: "Unable to Delete" });
    }
    return res.json({ message: "Deleted Successfully" });
  } catch (error) {
    return error;
  }
};
module.exports.getBookingById = async (req, res, next) => {
  try {
    const bookingData = await Appointment.findById({ _id });
    res.json({ data: bookingData });
  } catch (error) {
    console.log(error);
  }
};
