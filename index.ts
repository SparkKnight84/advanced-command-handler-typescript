import { config } from "dotenv";
config();
import { Client, Intents } from "discord.js";
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

import * as path from "path";
import * as fs from "fs";

const { TOKEN, PREFIX } = require("./config")

client.on('ready', () => {
  console.log(`[READY] Logged in as: ${client.user.tag}`)
  console.log(`[READY] With globle prefix: ${PREFIX}`)
    
  const commandBase = require(`./commands/command-base`)
  
  const readCommands = dir => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for(const file of files){
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if(stat.isDirectory()){
        readCommands(path.join(dir, file))
      } else if(file !== "command-base.js") {
        const option = require(path.join(__dirname, dir, file))

        commandBase(client, option)
      }
    }
  }
  readCommands("commands")
})

client.login(TOKEN).catch(err => console.log(`[ERROR]: ${err}`))