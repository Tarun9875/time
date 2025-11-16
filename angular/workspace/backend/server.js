// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // parse JSON body

let students = [
  { id: 1, name: "Rahul", marks: 80 },
  { id: 2, name: "Meena", marks: 25 }
];

// GET /students
app.get('/students', (req, res) => {
  res.json(students);
});

// POST /students
app.post('/students', (req, res) => {
  const { name, marks } = req.body;
  if (!name || typeof marks === 'undefined') return res.status(400).json({ error: 'name and marks required' });
  const id = students.length ? Math.max(...students.map(s => s.id)) + 1 : 1;
  const student = { id, name, marks };
  students.push(student);
  res.status(201).json(student);
});

// PUT /students/:id
app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, marks } = req.body;
  const idx = students.findIndex(s => s.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Student not found' });
  students[idx] = { id, name: name ?? students[idx].name, marks: typeof marks === 'undefined' ? students[idx].marks : marks };
  res.json(students[idx]);
});

// DELETE /students/:id
app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const before = students.length;
  students = students.filter(s => s.id !== id);
  if (students.length === before) return res.status(404).json({ error: 'Student not found' });
  res.json({ message: 'Deleted' });
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
