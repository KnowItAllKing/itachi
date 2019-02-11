"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./base/Client");
class Itachi extends Client_1.BaseClient {
    constructor(token, options) {
        super({
            token: token,
            owner: '517016133694521374',
            commandsDir: './commands',
            eventsDir: './events'
        }, options);
    }
    ;
}
exports.Itachi = Itachi;
;
