const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Bot kann nun genutzt werden!")

    setInterval(async function() {

        let status = ['Recraft.net | -help', 'die v1', 'Recraft.net', 'Recraft.net | -help', 'auf ${bot.guilds.size} Servern'];
        let chosen = status[Math.floor(Math.random() * status.length)];
      
        bot.user.setActivity(chosen, {type: "PLAYING"});
      
      
      
    }, 8000);
});
bot.on('message', message => {
	if(message.content === 'help') {
		message.channel.send('**Command List**');
		message.channel.send('_bot_');
   } 
});
bot.on('message', message => {
	if(message.content=== 'bot') {
		message.channel.send('Der Bot ist bald 24/7 online!');
	} 
});

bot.login(process.env.BOT_TOKEN);