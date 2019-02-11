"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Itachi_1 = require("./structures/Itachi");
const dotenv = require("dotenv");
dotenv.config();
const client = new Itachi_1.Itachi(process.env.TOKEN, {
    messageCacheMaxSize: -1,
    messageCacheLifetime: 0,
    messageSweepInterval: 7200,
    fetchAllMembers: true,
    restWsBridgeTimeout: 10000,
    restTimeOffset: 700,
    restSweepInterval: 240,
    retryLimit: 10,
    disabledEvents: ["TYPING_START"],
    ws: {
        large_threshold: 1000,
        compress: true
    }
});
client.start();
