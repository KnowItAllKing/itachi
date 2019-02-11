import { Client, ClientOptions, Collection } from 'discord.js';
import { BaseOptions } from '../../types/BaseOptions';
import { EventHandler } from '../base/EventHandler';
import { CommandHandler } from '../base/CommandHandler';
import * as path from 'path';
import { Command } from './Command';
export class BaseClient extends Client {
  public readonly token: string | null;
  public readonly commandsDir: string | null;
  public readonly eventsDir: string | null;
  public readonly owner: string | null;
  public readonly eventHandler: EventHandler;
  public readonly commandHandler : CommandHandler;
  public commands: Collection<string, Command>;
  public constructor(options: BaseOptions, clientOptions: ClientOptions) { 
    super(clientOptions);//d
    this.commands = new Collection(); 
    this.commandsDir = options.commandsDir ? path.resolve(options.commandsDir!) : null;
    this.eventsDir = options.eventsDir ? path.resolve(options.eventsDir!) : null;
    this.eventHandler = new EventHandler(this);
    this.eventHandler.load();
    this.commandHandler = new CommandHandler(this);
    this.commandHandler.load();
    this.on('ready', async (): Promise<any> => {
      console.log(`Logged in as ${this.user.tag}...`);
    });
    this.on('error', console.log);
    this.login(options.token);
  }; 
  public async start(): Promise <void> { await this.login(this.token); };
  public async init(): Promise<void> {
    // Initialize the command and event handlers here and call it in the constructor.
    // Including the ready event.
  }
};