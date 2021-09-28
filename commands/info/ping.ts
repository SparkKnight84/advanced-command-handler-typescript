import Discord = require("discord.js")
module.exports = {
  commands: ['ping'],
  callback: (message: Discord.Message, args: Array<String>, client: Discord.Client) => {
    
    message.channel.send("Pong!")
    
  }
}