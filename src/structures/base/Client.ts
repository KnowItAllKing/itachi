import { Client, ClientOptions } from 'discord.js';
import { BaseOptions } from '../../types/BaseOptions';
import * as path from 'path';
export class BaseClient extends Client {
  public readonly token: string | null;
  public readonly commandsDir: string | null;
  public readonly eventsDir: string | null;
  public readonly owner: string | null;
  public constructor(options: BaseOptions, clientOptions: ClientOptions) {
    super(clientOptions);
    this.commandsDir = options.commandsDir ? path.resolve(options.commandsDir!) : null;
    this.eventsDir = options.eventsDir ? path.resolve(options.eventsDir!) : null;    
    this.on('ready', async (): Promise<any> => {
      console.log(`Logged in as ${this.user.tag}...`);
    });
    if(!options.token) console.log(options)
    this.login(options.token);
  };
  public async start(): Promise <void> { await this.login(this.token); };
};