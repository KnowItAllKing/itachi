"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const EventHandler_1 = require("../base/EventHandler");
const CommandHandler_1 = require("../base/CommandHandler");
const path = require("path");
class BaseClient extends discord_js_1.Client {
    constructor(options, clientOptions) {
        super(clientOptions); //d
        this.commands = new discord_js_1.Collection();
        this.commandsDir = options.commandsDir ? path.resolve(options.commandsDir) : null;
        this.eventsDir = options.eventsDir ? path.resolve(options.eventsDir) : null;
        this.eventHandler = new EventHandler_1.EventHandler(this);
        this.eventHandler.load();
        this.commandHandler = new CommandHandler_1.CommandHandler(this);
        this.commandHandler.load();
        this.on('ready', async () => {
            console.log(`Logged in as ${this.user.tag}...`);
        });
        this.on('error', console.log);
        this.login(options.token);
    }
    ;
    async start() { await this.login(this.token); }
    ;
    async init() {
        // Initialize the command and event handlers here and call it in the constructor.
        // Including the ready event.
    }
}
exports.BaseClient = BaseClient;
;
