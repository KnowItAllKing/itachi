"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
class EventHandler {
    constructor(client) { this.client = client; }
    ;
    load() {
        fs_1.readdir(this.client.eventsDir, (err, files) => {
            if (err)
                throw new Error(`Events Error: ${err}`);
            for (const file of files) {
                if (!file.endsWith('.js'))
                    continue;
                const event = new (require(`${path_1.resolve(this.client.eventsDir)}/${file}`));
                this.client.on(event.name, (...params) => event.execute(this.client, ...params));
            }
        });
    }
}
exports.EventHandler = EventHandler;
