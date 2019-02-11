import { Event } from '../structures/base/Event';
import { Itachi } from '../structures/Itachi';
import { Message } from 'discord.js';

module.exports = class MessageEvent extends Event {
  constructor() {
    super({
      name: 'message'
    });
  };
  async execute(client: Itachi, message: Message) {
    if (message.author.bot) return;
    if(!message.content.trim().toLowerCase().startsWith('i!')) return;
    const args: string[] = message.content.trim().slice(2).split(/\s+/g),
     command: string = args.shift().toLowerCase();
    if(!client.commands.has(command)) return;
    try { return client.commands.get(command).execute(message, args); } 
    catch(e) { await message.channel.send('Sum ting gon wong...'); return console.log(e); };
  };
};
