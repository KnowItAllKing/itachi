import { Itachi } from '../Itachi';
export class Event {
  public client!: Itachi;
  public name!: string;
  public constructor(options: {}) { Object.assign(this, options) };
};