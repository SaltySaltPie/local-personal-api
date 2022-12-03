const { Router } = require("express");
const getTest = require("../controllers/test");

const testRouter = Router();

testRouter.get("/", getTest);

module.exports = testRouter