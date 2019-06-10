const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('🏓 Pong! 0ms.');
  	}
});

client.on('message', message => {
     if (message.content === 'botcoder') {
         message.channel.send('Bot-Owner/Developer | LennexDev'):
         } 
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
