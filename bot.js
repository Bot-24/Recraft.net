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
         message.reply('IP:. **Comming Soon!** Prot:. ** _19132_ **):
        } 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
