const db = require('../config/db');

exports.registerUser = (req, res) => {
  console.log('Register Request Body:', req.body);

  const { name, course, email, password } = req.body;
  if (!name || !course || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  db.query(
    'INSERT INTO users (name, course, email, password) VALUES (?, ?, ?, ?)',
    [name, course, email, password],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
      }
      res.status(201).json({ message: 'User registered successfully' });
    }
  );
};


exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (results.length > 0) {
      res.status(200).json({ message: 'Login successful', user: results[0] });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });
};