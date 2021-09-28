# An advanced command handler for Discord.js written in typescript

I made this project so that other people can use this code and they dont need to code the same thing again and again for their Discord.js bots!

In this type of command handler, you can easily manage your command files.

For example, in the commands folder you can make folders like

- `admin commands` which can include commands like `kick` and `ban`
- `moderation commands` which can include commands like `clear/purge` and `mute`

This can help you to manage your commands better

## How to use

To add commands in this type of command handler, follow these steps:

- Make a new file anywhere in the `commands/` folder, with the name of your command
- Copy this code and paste it in the file you created just now

```ts
import {} from "discord.js";
module.exports = {
  commands: [''],
  callback: (message, args, client) => {

    //You can put your code for command here

  }
}
```

- Import what you want from discord.js in the first line
- In the `commands: ['']` array, you have to put the name of the command and/or alias of that command
- In the `callback: (message, args, client) => { }` code block (`{}`), you can put the actual code for your command.

Thats it, and if you are a more experianced developer, you should already know what to do.

(Forgive me if I couldn't explain properly, but thats all I can do)

## Credits for this command handler: [Worn Off Keys](https://www.youtube.com/watch?v=lbpUc17InkM)