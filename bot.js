const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')
const token = settings.token;
const prefix = settings.prefix;

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    const msg = message;
    const args = msg.content.slice(prefix.length + 1).split(' ');
    if(!msg.content.startsWith(prefix)) return;

    if(msg.content == `${prefix} ping`) {
        msg.reply("Pong!");
    }

    if(msg.content == `${prefix}say`) {
        if(!args[1]) return msg.reply("Please provide arguments!");
        msg.channel.send(args[1]);
    }
});

client.login(token);