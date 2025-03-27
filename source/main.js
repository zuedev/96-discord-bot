import { Client as Discord, Events, GatewayIntentBits } from "discord.js";
import { CronJob } from "cron";

const state = {};

// check for required environment variables
[
  "DISCORD_BOT_TOKEN",
  "DISCORD_USER_ID_MANAGER",
  "DISCORD_USER_ID_CLIENT",
].forEach((variable) => {
  if (!process.env[variable])
    throw new Error(`Missing required environment variable: "${variable}"`);
});

const discord = new Discord({
  intents: Object.values(GatewayIntentBits),
});

discord.once(Events.ClientReady, async () => {
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
  sendReminderCron(
    "0 9 * * 1-5",
    "Good morning! ☀️ Time to wake up! ⏰",
    "America/Chicago"
  );

  // Monday, Wednesday, and Thursday @ 1855 CST: Stream prep
  sendReminderCron(
    "55 18 * * 1,3,4",
    [
      "# Stream Prep Time! 🛠️",
      "",
      "Stream starts in 5 minutes!",
      "## Checklist 📋",
      "- Go live on Twitter 🐦",
      "- Go Post to all the socials 📣",
      "- Refill water 💧",
    ],
    "America/Chicago"
  );

  // Monday, Wednesday, and Thursday @ 1900 CST: Stream start
  sendReminderCron(
    "0 19 * * 1,3,4",
    "Time to go live! 🚀 Good luck! ❤️",
    "America/Chicago"
  );
}

function sendReminderCron(cron, message, timzone = "Etc/UTC") {
  if (typeof message === "array") message = message.join("\n");

  new CronJob(
    cron,
    async () => {
      console.log(`Sending message to client: ${message}`);
      await state.client.send(message);
      await state.manager.send(`Sent message to client: ${message}`);
      console.log("Message sent!");
    },
    null,
    true,
    timezone
  );
}
