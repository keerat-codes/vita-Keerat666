const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const PORT = 8009;

require('dotenv').config();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const enumControlRoute = require('./routes/enumControl');
app.use('/enumControl', enumControlRoute);
const outdoorActivityRoute = require('./routes/outdoorActivity');
app.use('/outdoorActivity', outdoorActivityRoute);
const milestonesRoute = require('./routes/milestones');
app.use('/milestones', milestonesRoute);
const historyLogRoute = require('./routes/historyLog');
app.use('/historyLog', historyLogRoute);
const todoRoute = require('./routes/todo');
app.use('/todo', todoRoute);
const dateReminderRoute = require('./routes/dateReminder');
app.use('/dateReminder', dateReminderRoute);
const medicineIntakeLogRoute = require('./routes/medicineIntakeLog');
app.use('/medicineIntakeLog', medicineIntakeLogRoute);
const medicineRoute = require('./routes/medicine');
app.use('/medicine', medicineRoute);
const bloodPressureRoute = require('./routes/bloodPressure');
app.use('/bloodPressure', bloodPressureRoute);
const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

const conn = require('./middlewares/connection');
console.log("Trying to establish a connection to TiDB...");

if (conn) {
  console.log("Connection to TiDB successful");
} else {
  console.log("Connection to TiDB failed");
}


//Please don't delete this health API
app.use('/api/health', (req, res) => {
    res.send('Hello Autopilot');
  });

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

module.exports = app;