import { resolve } from 'path';
import { Itachi } from '../Itachi';
import { readdir } from 'fs';
import { Event } from './Event';

export class EventHandler {
  public client!: Itachi;
  constructor(client: Itachi) { this.client = client; };
  load(): any {
    readdir(this.client.eventsDir, (err, files) => {
      if (err) throw new Error(`Events Error: ${err}`);
      for (const file of files) { 
        if (!file.endsWith('.js')) continue;
        const event = new (require(`${resolve(this.client.eventsDir)}/${file}`)); 
        this.client.on(event.name, (...params) => event.execute(this.client, ...params));
      } 
    }); 
  }
}