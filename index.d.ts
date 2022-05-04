declare module "winston-discord-webhook" {
    interface options {
        webhook: string
        useCodeBlock?: boolean
        interval?: number
        maxLength?: number
    }

    class DiscordTransport {
        constructor(opts: options)
        log(info: any, callback: () => void): any
    }
}
