import { readdir } from 'fs';
import { resolve } from 'path';
import { Itachi } from '../Itachi';

export class CommandHandler {
  public client!: Itachi;
    constructor(client: Itachi) { this.client = client; };
    load(): any {
        readdir(resolve(`.../../dist/${this.client.commandsDir}`), (err, files) => { 
          if(err) throw new Error(`Command Error: ${err}`);
          for (const file of files) { 
            if (!file.endsWith('.js')) continue;
            const command = new (require(resolve(`.../../dist/${this.client.commandsDir}/${file}`)));
            this.client.commands.set(command.name, command);
            for(const alias of command.aliases) this.client.commands.set(alias, command);
          };
        });
    };
}