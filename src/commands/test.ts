import { Message } from 'discord.js';
import { Command } from '../structures/Command';
export class Test extends Command {
  constructor(){
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
  public async execute(message: Message, args: string[]) {
    await message.channel.send('hi');
  }
}