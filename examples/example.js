const winston = require("winston")
const DiscordTransport = require("winston-discord-webhook")
require("dotenv").config()

module.exports = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new DiscordTransport({
            webhook: process.env.LOGS_WEBHOOK,
            useCodeblock: true,
        })
    ]
})