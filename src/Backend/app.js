const express = require("express");
const bodyParser = require("body-parser");
const databaseConnection = require("scr/Backend/middlewares/databaseConnection")
const hostname = "127.0.0.1";
const app = express();
const dotenv = require("dotenv");
dotenv.config({path: __dirname + "/.env"});
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use(express.static("scr/Frontend/index.html"));

const PORT = 4000;

const registerRoute = require("scr/Backend/routes/register")
const loginRoute = require("scr/Backend/routes/login");
const teacherRoute = require("scr/Backend/routes/teacher");
const classRoute = require("scr/Backend/routes/class");
const studentRoute = require("scr/Backend/routes/student");
const lessonsRoute = require("scr/Backend/routes/lessons");
const studentNotesRoute = require("scr/Backend/routes/studentNotes");
const studentGradesRoute = require("scr/Backend/routes/studentGrades");

app.use(databaseConnection);

app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/teacher", teacherRoute);
app.use("/class", classRoute);
app.use("/student", studentRoute);
app.use("/lessons", lessonsRoute);
app.use("/studentNotes", studentNotesRoute);
app.use("/studentGrades", studentGradesRoute);

app.listen(PORT, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${PORT}/`);
});
