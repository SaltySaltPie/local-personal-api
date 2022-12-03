const updateDDNS = require("../updateDDNS");

var CronJob = require("cron").CronJob;
const cronjob = new CronJob("*/50 * * * * *", async () => await updateDDNS());

module.exports = cronjob;
