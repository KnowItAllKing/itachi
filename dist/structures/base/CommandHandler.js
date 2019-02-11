"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
class CommandHandler {
    constructor(client) { this.client = client; }
    ;
    load() {
        fs_1.readdir(this.client.commandsDir, (err, files) => {
            if (err)
                throw new Error(`Command Error: ${err}`);
            for (const file of files) {
                if (!file.endsWith('.js'))
                    continue;
                const name = file.split('.')[0];
                const command = require(`${path_1.resolve(this.client.commandsDir)}/${file}`);
                this.client.commands.set(name, new command);
            }
            ;
        });
    }
    ;
}
exports.CommandHandler = CommandHandler;
