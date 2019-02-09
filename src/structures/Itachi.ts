import { BaseClient } from './base/Client';
export class Itachi extends BaseClient {
  public constructor(token, options) {
    super({
      token: token,
      owner: '517016133694521374',
      commandsDir: './commands',
      eventsDir: './events'
      }, options);
  };
};