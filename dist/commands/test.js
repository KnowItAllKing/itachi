"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../structures/base/Command");
module.exports = class Test extends Command_1.Command {
    constructor() {
        super({
            name: 'test',
            description: 'Test command',
            usage: '`prefix test`',
            aliases: ['tester'],
            category: 'misc',
            senderPerms: ['SEND_MESSAGES'],
            clientPerms: ['SEND_MESSAGES'],
            ownerOnly: false
        });
    }
    async execute(message, args) {
        await message.channel.send('hi');
    }
};
