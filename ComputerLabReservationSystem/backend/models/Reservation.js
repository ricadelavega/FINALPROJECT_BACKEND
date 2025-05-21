const db = require('../config/db');

const Reservation = {
  create: (user_id, lab_name, date, start_time, end_time, purpose) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO reservations (user_id, lab_name, date, start_time, end_time, purpose) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(query, [user_id, lab_name, date, start_time, end_time, purpose], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },

  findAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM reservations', (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },

  findById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM reservations WHERE id = ?', [id], (err, result) => {
        if (err) reject(err);
        else resolve(result[0]);
      });
    });
  },

  update: (id, lab_name, date, start_time, end_time, purpose) => {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE reservations SET lab_name = ?, date = ?, start_time = ?, end_time = ?, purpose = ? WHERE id = ?';
      db.query(query, [lab_name, date, start_time, end_time, purpose, id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM reservations WHERE id = ?', [id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
};

module.exports = Reservation;