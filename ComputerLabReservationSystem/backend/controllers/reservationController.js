const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
  const { user_id, lab_name, date, start_time, end_time, purpose } = req.body;

  try {
    const result = await Reservation.create(user_id, lab_name, date, start_time, end_time, purpose);
    res.status(201).json({ message: 'Reservation created successfully', reservationId: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create reservation', error });
  }
};

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reservations', error });
  }
};

exports.getReservationById = async (req, res) => {
  const { id } = req.params;

  try {
    const reservation = await Reservation.findById(id);
    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reservation', error });
  }
};

exports.updateReservation = async (req, res) => {
  const { id } = req.params;
  const { lab_name, date, start_time, end_time, purpose } = req.body;

  try {
    const result = await Reservation.update(id, lab_name, date, start_time, end_time, purpose);
    res.json({ message: 'Reservation updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update reservation', error });
  }
};

exports.deleteReservation = async (req, res) => {
  const { id } = req.params;

  try {
    await Reservation.delete(id);
    res.json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete reservation', error });
  }
};