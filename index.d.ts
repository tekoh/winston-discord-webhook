import TransportStream = require("winston-transport")

declare namespace DiscordTransport {
    interface DiscordTransportOptions extends TransportStream.TransportStreamOptions {
        webhook: string
        useCodeBlock?: boolean
        interval?: number
        maxLength?: number
    }
}

declare class DiscordTransport extends TransportStream {
    options: DiscordTransport.DiscordTransportOptions
    
    constructor(options: DiscordTransport.DiscordTransportOptions)
}

export = DiscordTransport
