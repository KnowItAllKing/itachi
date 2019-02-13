import { Message } from 'discord.js';
import { Command } from '../structures/base/Command';
module.exports = class Test extends Command {
  constructor(){
    super({
      name: 'Test',
      description: 'Test command',
      usage: '`prefix test`',
      aliases: ['tester'],
      category: 'misc',
      senderPerms: ['SEND_MESSAGES'],
      clientPerms: ['SEND_MESSAGES'],
      ownerOnly: false
    });
  }
  async execute(message: Message, args: string[]) {
    await message.channel.send('hi');
  }
}