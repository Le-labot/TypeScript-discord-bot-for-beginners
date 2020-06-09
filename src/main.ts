import { Client, Message } from 'discord.js';
import { config } from './config';
const client: Client = new Client();

client.on("ready", () => console.log(`Logged in as ${client.user.tag}!`));

client.on("message", (message: Message) => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return
    const args: string[] = message.content.slice(config.prefix.length).split(/ +/);
    const command: string = args.shift().toLocaleLowerCase();

    switch (command) {
        case 'ping':
            message.channel.send("Pong !");
            break;
    
        default: message.reply("Commande invalide !!!");
            break;
    }
})

client.login(config.token)