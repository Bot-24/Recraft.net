const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+ping') {
    	message.channel.send(':ping_pong: Pong! 0ms.');
  	}
});

client.on('message', message => {
	    if (message.content === '+server') {
		message.channel.send('**==================**', 
		'IP:. **Comming Soon!**', 
		'Port:. **_19132_**',
		'Status:. Online, Wartungsarbeiten ? ??', 
        '**==================**'):
	} 
});

client.on('message', message => {
	if (message.content === '+botinfo') {
		message.channel.send('Der Bot ist in der BetaPhase!'):
		} 
});

client.on('message', message => {
	  if (message.content === '+help') {
		message.channel.send('**=====================**', 
		'Prefix: *->* **+**', 
		'__________________', 
		'botinfo', 
		'server', 
		'ping'):
	} 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
