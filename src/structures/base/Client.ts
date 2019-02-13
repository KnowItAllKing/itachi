import { Client, ClientOptions, Collection } from 'discord.js';
import { BaseOptions } from '../../types/BaseOptions';
import { EventHandler } from '../base/EventHandler';
import { CommandHandler } from '../base/CommandHandler';
import { Command } from './Command';
export class BaseClient extends Client {
  private _token: string;
  public readonly commandsDir: string | null;
  public readonly eventsDir: string | null;
  public readonly owner: string | null;
  public readonly eventHandler: EventHandler;
  public readonly commandHandler : CommandHandler;
  public commands: Collection<string, Command>;
  public constructor(options: BaseOptions, clientOptions: ClientOptions) { 
    super(clientOptions);
    this.commands = new Collection(); 
    this.commandsDir = options.commandsDir || null;
    this.eventsDir = options.eventsDir || null;
    this.eventHandler = new EventHandler(this);
    this.eventHandler.load();
    this.commandHandler = new CommandHandler(this);
    this.commandHandler.load();
    this._token = options.token;
    this.on('ready', async (): Promise<any> => console.log(`Logged in as ${this.user.tag}...`));
    this.on('error', console.log);
  }; 
  public async start(): Promise <void> { await this.login(this._token); };
};