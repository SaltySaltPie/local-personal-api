require("dotenv").config();
const { setUpLogs } = require("./src/utils/setUpLogs");
const { dLog, fLog } = setUpLogs("APP", "main");

const axiosHeaders = require("./src/config/axiosHeaders");
const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");

dLog(`//*importing routes`);
const testRouter = require("./src/routes/test");
const cronjob = require("./src/controllers/cronjobs");
const indexRouter = require("./src/routes");

dLog(`//*configuring app`);
const app = express();
axiosHeaders();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

dLog(`//*configuring routes`);
app.use("/", indexRouter);
app.use("/test", testRouter);

fLog(`//@starting CronJobs`);
// cronjob.start();

const { PORT = 5000 } = process.env;
app.listen(PORT, () => fLog(`//@Listening on ${PORT}`));
// app.listen(PORT,'0.0.0.0', () => fLog(`//@Listening on ${'0000'}::${PORT}`));

module.exports = app;
