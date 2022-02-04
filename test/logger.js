const winston = require("winston")
const transport = require("../index")
require("dotenv").config()

if (!process.env.TEST_WEBHOOK) {
    throw new Error("No test webhook given")
}

module.exports = winston.createLogger({
    transports: [
        new transport({
            webhook: process.env.TEST_WEBHOOK
        })
    ]
})