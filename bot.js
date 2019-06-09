const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('Pong! 0ms.');
  	}
});

client.on('message'), message => {
     if (message.content === 'IP') {
         message.channel.send('IP:. Comming Soon!'):
     }

client.on('message'), message =>{
     if (message.content === 'PORT') {
         message.channel.send('Port:. 19132'):
        } 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
