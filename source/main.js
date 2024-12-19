import { Client as Discord, Events, GatewayIntentBits } from "discord.js";
import { CronJob } from "cron";

const state = {};

// check for required environment variables
[
  "DISCORD_BOT_TOKEN",
  "DISCORD_GUILD_ID",
  "DISCORD_USER_ID_MANAGER",
  "DISCORD_USER_ID_CLIENT",
].forEach((variable) => {
  if (!process.env[variable])
    throw new Error(`Missing required environment variable: "${variable}"`);
});

const discord = new Discord({
  intents: [GatewayIntentBits.Guilds],
});

discord.once(Events.ClientReady, async () => {
  // are we in the correct guild?
  if (!discord.guilds.cache.has(process.env.DISCORD_GUILD_ID))
    throw new Error("Bot is not in the correct guild!");

  // are we in any other guilds? if so, leave them
  discord.guilds.cache.forEach((guild) => {
    if (guild.id !== process.env.DISCORD_GUILD_ID) guild.leave();
  });

  // set up initial state
  state.manager = await discord.users.fetch(
    process.env.DISCORD_USER_ID_MANAGER
  );
  state.client = await discord.users.fetch(process.env.DISCORD_USER_ID_CLIENT);

  // set up cron jobs
  cronSetup();

  // message manager with boot message
  await state.manager.send("I've booted up! ✨");
});

discord.login(process.env.DISCORD_BOT_TOKEN);

async function cronSetup() {
  // Weekdays @ 0900 CST: Wake up!
  new CronJob(
    "0 9 * * 1-5",
    async () => {
      let message = "Good morning! ☀️ Time to wake up! ⏰";
      console.log(`Sending message to client: ${message}`);
      await state.client.send(message);
      await state.manager.send(`Sent message to client: ${message}`);
      console.log("Message sent!");
    },
    null,
    true,
    "America/Chicago"
  );

  // Monday, Wednesday, and Thursday @ 1855 CST: Stream prep
  new CronJob(
    "55 18 * * 1,3,4",
    async () => {
      let message = "# Stream Prep Time! 🛠️";
      message += "\n\n";
      message += "Stream starts in 5 minutes!";
      message += "\n";
      message += "## Checklist 📋";
      message += "\n";
      message += "- Go live on Twitter 🐦";
      message += "\n";
      message += "- Go Post to all the socials 📣";
      message += "\n";
      message += "- Refill water 💧";
      message += "\n";
      console.log(`Sending message to client: ${message}`);
      await state.client.send(message);
      await state.manager.send(`Sent message to client: ${message}`);
      console.log("Message sent!");
    },
    null,
    true,
    "America/Chicago"
  );

  // Monday, Wednesday, and Thursday @ 1900 CST: Stream start
  new CronJob(
    "0 19 * * 1,3,4",
    async () => {
      let message = "Time to go live! 🚀 Good luck! ❤️";
      console.log(`Sending message to client: ${message}`);
      await state.client.send(message);
      await state.manager.send(`Sent message to client: ${message}`);
      console.log("Message sent!");
    },
    null,
    true,
    "America/Chicago"
  );
}
