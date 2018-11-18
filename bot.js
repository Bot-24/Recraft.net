const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Bot kann nun genutzt werden!")


bot.on('message', message => {
	if(message.content === 'help') {
		message.channel.send('**Command List**');
		message.channel.send('_bot_');
   } 
});
bot.on('message', message => {
	if(message.content === 'bot') {
		message.channel.send('Der Bot ist bald 24/7 online!');
	} 
});

bot.login(process.env.BOT_TOKEN);