"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("../structures/base/Event");
module.exports = class MessageEvent extends Event_1.Event {
    constructor() {
        super({
            name: 'message'
        });
    }
    async execute(client, message) {
        if (message.author.bot)
            return;
        if (!message.content.trim().toLowerCase().startsWith('i!'))
            return;
        const args = message.content.trim().slice(2).split(/\s+/g), command = args.shift().toLowerCase();
        if (!client.commands.has(command))
            return;
        try {
            client.commands.get(command).execute(message, args);
        }
        catch (e) {
            await message.channel.send('Sum ting gon wong...');
            return console.log(e);
        }
    }
};
// export = {
//   name: 'message',
//   execute: async (client: Itachi, message: Message) => {
//     if (message.author.bot) return;
//     if(!message.content.trim().toLowerCase().startsWith('i!')) return;
//     const args: string[] = message.content.trim().slice(2).split(/\s+/g),
//      command: string = args.shift().toLowerCase();
//     if(!client.commands.has(command)) return;
//     try { client.commands.get(command).execute(message, args); } 
//     catch(e){ await message.channel.send('Sum ting gon wong...'); return console.log(e); }
//   }
// }
