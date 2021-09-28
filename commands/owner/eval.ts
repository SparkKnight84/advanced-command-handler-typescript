const { PREFIX, adminIds } = require(`../../config.js`);
import Discord = require("discord.js");
let prefix = PREFIX;
module.exports = {
  commands: ['eval'],
  callback: (message: Discord.Message, args, client: Discord.Client) => {
    
    if(adminIds.includes(message.author.id)){
      
      var result = message.content.split(" ").slice(1).join(" ")
      let evaled = eval(result);
    
      message.channel.send(evaled).catch(err => {
        message.channel.send(`${err.name}: ${err.message}`)
        console.log(`${err.name}: ${err.message}`)
      })
      
    } else {
      return
    }
    
  }
}