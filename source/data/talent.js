export default [
  // {
  //   name: "capyblapy",
  //   discord_id: "313128528558161920",
  //   cronjobs: [
  //     // every second
  //     ["* * * * * *", "Hello, world!", "Etc/UTC"],
  //   ],
  // },
  {
    name: "YayJayBae",
    discord_id: "246758317433683969",
    cronjobs: [
      // Weekdays @ 0900 CST: Wake up!
      [
        "0 9 * * 1-5",
        "Good morning! ☀️ Time to wake up! ⏰",
        "America/Chicago",
      ],
      // Monday, Wednesday, and Thursday @ 1855 CST: Stream prep
      [
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
        "America/Chicago",
      ],
      // Monday, Wednesday, and Thursday @ 1900 CST: Stream start
      [
        "0 19 * * 1,3,4",
        "Time to go live! 🚀 Good luck! ❤️",
        "America/Chicago",
      ],
    ],
  },
  {
    name: "Bunn",
    discord_id: "1099844984506699846",
  },
  {
    name: "Nari",
    discord_id: "983463680970743868",
  },
  {
    name: "Sweets",
    discord_id: "333314340788895745",
  },
  {
    name: "Tygi",
    discord_id: "1051538018265206825",
  },
  {
    name: "Woney",
    discord_id: "1113687477937512478",
  },
];
