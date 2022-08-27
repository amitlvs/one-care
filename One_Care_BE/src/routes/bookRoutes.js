const express = require("express");
const authToken = require("../middleware/token");
const router = express.Router();
const bookingService = require("../service/booking");
router.get("/getAppointment", bookingService.getBooking);
router.post("/bookAppointment", bookingService.doBooking);
router.put("/editAppointment/:id", bookingService.editBooking);
router.delete("/deleteAppointment/:id", bookingService.deleteBooking);
router.get("/getAppointmentById", bookingService.getBookingById);

module.exports = router;
