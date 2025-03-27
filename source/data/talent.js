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
        "Good morning! ☀️ Time to wake up! ⏰ Make sure you eat before 10am! 🍳🥞🥓",
        "America/Chicago",
      ],
      // Weekdays @ 1300 CST: Eat lunch!
      ["0 13 * * 1-5", "Time to eat lunch! 🍔🥗🍕", "America/Chicago"],
      // Monday, Wednesday, and Thursday @ 1800 CST: Nap if you need it!
      [
        "0 18 * * 1,3,4",
        "It's one hour before stream time! If you need a nap, now's the time! 😴",
        "America/Chicago",
      ],
      // Monday, Wednesday, and Thursday @ 1900 CST: Stream start
      [
        "0 19 * * 1,3,4",
        [
          "# Stream Prep Time! 🛠️",
          "Time to go live! 🚀 Good luck! ❤️",
          "## Checklist 📋",
          "- Go Post to all the socials 📣",
          "- Refill water 💧",
          "- Check audio levels 🎙️",
        ],
        "America/Chicago",
      ],
      // Monday, Wednesday, and Thursday @ 1910 CST: Go live on Twitter and YouTube
      [
        "10 19 * * 1,3,4",
        "Go live on Twitter and YouTube! 🐦📹",
        "America/Chicago",
      ],
      // Tuesday, Friday, and Sunday @ 1900 CST: Post to socials
      [
        "0 19 * * 2,5,0",
        [
          "# Social Media Time! 📣",
          "Time to post to all the socials! 🐦📸📹",
          "## Checklist 📋",
          "- TikTok 📹",
          "- Twitter 🐦",
          "- Instagram 📸",
          "- YouTube 📹",
        ],
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
