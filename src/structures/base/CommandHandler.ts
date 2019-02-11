import { readdir } from 'fs';
import { resolve } from 'path';
import { Itachi } from '../Itachi';

export class CommandHandler {
  public client!: Itachi;
    constructor(client: Itachi) { this.client = client; };
    load(): any {
        readdir(this.client.commandsDir, (err, files) => { 
          if(err) throw new Error(`Command Error: ${err}`);
          for (const file of files) { 
            if (!file.endsWith('.js')) continue;
            const name: string = file.split('.')[0];
            const command = require(`${resolve(this.client.commandsDir)}/${file}`);
            this.client.commands.set(name, new command);
          };
        });
    };
}