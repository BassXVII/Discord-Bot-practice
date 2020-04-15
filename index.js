const Discord = require('discord.js')
const bot = new Discord.Client();
const token = "Njk5NDA2NzEyNzMzNDMzOTg2.XpVLFw.Lb_lSR_ppJ9vThPcJlP8D-M-UwU";
const prefix = ".";
const emojiCharacters = require('./emojis');
const cheerio = require('cheerio');
const request = require('request');
 var isReady = true;
const fs = require('fs');
const ytdl = require('ytdl-core');
bot.commands = new Discord.Collection();

 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log(`Ahoy! ${emojiCharacters['?']}`);
     
     
});
 
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
 
    switch (args[0]) {
 
        case "help":
            bot.commands.get('Cmds').execute(message, args);
                break;

         case "clear":
            bot.commands.get('Clear').execute(message, args);
            message.channel.send(`You cleared ${args[1]} messages.`);
                break;
            case "Sad":
            bot.commands.get('SadBoi').execute(message, args);
            break;
        
        }
        
    });

    bot.on('message', message => {
 
        let args = message.content.substring(prefix.length).split(" ");
     
        switch (args[0]) {
            case 'image':
            image(message);
     
            break;
        }
     
    });
     
    function image(message){
     
        var options = {
            url: "https://www.google.com/search?q=cats&tbm=" + "cat",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        };
     
     
     
     
     
        request(options, function(error, response, responseBody) {
            if (error) {
                return;
            }
      
     
            $ = cheerio.load(responseBody); 
     
     
            var links = $('img.rg_i  a.link');
     
            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
            
            console.log(urls);
     
            if (!urls.length) {
               
                return;
            }
     
            // Send result
            message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        });


    }
          



   //---------------------------------------------------- Music Bot
            
           
 
bot.login(token);
