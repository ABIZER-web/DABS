const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/doctorApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Schema & Model
const AppointmentSchema = new mongoose.Schema({
    name: String,
    doctor: String,
    date: String,
    time: String
});
const Appointment = mongoose.model('Appointment', AppointmentSchema);

// API to book appointment
app.post('/api/appointments', async (req, res) => {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json({ message: 'Appointment booked successfully!' });
});

// API to fetch appointments
app.get('/api/appointments', async (req, res) => {
    const appointments = await Appointment.find();
    res.json(appointments);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));

