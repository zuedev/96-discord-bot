import { Client as Discord, Events, GatewayIntentBits } from "discord.js";
import { CronJob } from "cron";
import management from "./data/management.js";
import talent from "./data/talent.js";

const discord = new Discord({
  intents: Object.values(GatewayIntentBits),
});

discord.once(Events.ClientReady, async () => {
  // set up cron jobs for each talent if they have any
  for (const { discord_id, cronjobs } of talent) {
    if (cronjobs) {
      for (const [cronTime, message, timezone] of cronjobs) {
        sendReminderCron(discord_id, cronTime, message, timezone);
      }
    }
  }

  // message managers with boot message
  await messageManagement("Bot is ready!");
});

discord.login(process.env.DISCORD_BOT_TOKEN);

async function messageDiscordId(discord_id, message) {
  const user = await discord.users.fetch(discord_id);

  try {
    await user.send(message);
  } catch (error) {
    console.error(
      `Failed to send message to "${discord_id}" discord ID: ${error}`
    );
  }
}

async function messageManagement(message) {
  for (const { discord_id } of management) {
    await messageDiscordId(discord_id, message);
  }
}

function sendReminderCron(discord_id, cronTime, message, timezone = "Etc/UTC") {
  if (typeof message === "array") message = message.join("\n");

  new CronJob(
    cronTime,
    async () => {
      console.log(`Sending message to "${discord_id}" discord ID: ${message}`);
      await messageDiscordId(discord_id, message);

      console.log(`Sending message to all of management: ${message}`);
      await messageManagement(
        `Reminder for <@${discord_id}>:\n\`\`\`\n${message}\n\`\`\``
      );
    },
    null,
    true,
    timezone
  );
}
