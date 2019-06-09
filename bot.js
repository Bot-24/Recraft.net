const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply(':pong: 0ms.');
  	}
});

client.on('message'), message => {
     if (message.content === 'server') {
         message.reply('============'):
        } 
});

client.on('message'), message => {
     if (message.content === '============') {
         message.reply('Server IP:. **Comming Soon!**'):
        } 
});

client.on('message'), message => {
     if (message.content === 'Server IP:. Comming Soon!') {
         message.reply('Port:. *19132*'):
        } 
});

client.on('message'), message => {
     if (message.content === 'Port:. 19132') {
         message.reply('============'):
        } 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
