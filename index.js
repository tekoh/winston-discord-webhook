const Transport = require("winston-transport")
const { Webhook } = require("discord-webhook-node")

module.exports = class DiscordTransport extends Transport {
    /**
     *
     * @param {Object} opts Options for Discord Transport
     * @param {string} opts.webhook Webhook URL to send logs to
     * @param {boolean} opts.useCodeblock Should each message be automatically formatted into a code block? Default: false
     * @param {number} opts.interval Interval to send messages in queue. Default: 2500
     * @param {number} opts.maxLength Maximum length of a message to send. Default: 1900
     */
    constructor(opts) {
        super(opts)

        if (!opts.webhook) {
            throw new Error("No webhook given for Discord Transport")
        }

        /**
         * @type {boolean}
         */
        this.useCodeblock = opts.useCodeblock || false

        /**
         * @type {number}
         */
        this.interval = opts.interval || 2500

        /**
         * @type {number}
         */
        this.maxLength = opts.maxLength || 1900

        this.queue = []
        this.hook = new Webhook(opts.webhook)

        setInterval(() => {
            let content = this.queue.join("\n")

            if (content.length > this.maxLength) {
                content = content.substring(0, this.maxLength) + "\n..."
            }

            if (content != "") {
                this.hook.send(content)
            }

            this.queue = []
        }, this.interval)
    }

    log(info, callback) {
        setImmediate(() => {
            this.emit("logged", info)

            if (this.useCodeblock) {
                this.queue.push(`\`\`\`ansi\n${info[Symbol.for("message")]}\n\`\`\``)
            } else {
                this.queue.push(info[Symbol.for("message")])
            }
        })

        callback()
    }
}
