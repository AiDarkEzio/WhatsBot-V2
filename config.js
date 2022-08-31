module.exports = {
  profile: {
    ownerName: "", // defult: AiDarkEzio
    ownerNumb: "", // defult: 94761539856
    botName: "", // defult: Whats Bot MD
  },
  reply: {
    notFound: "", // defult: "This Command not created. it was creating",
    success: "", // defult: "Done ✓",
    admin: "", // defult: "This Feature Is Only For Admin!",
    botAdmin: "", // defult: "Bot Must Be Admin First!",
    owner: "", // defult: "This Feature Is Only For Owner!",
    group: "", // defult: "Feature Used Only For Groups!",
    private: "", // defult: "Features Used Only For Private Chat!",
    bot: "", // defult: "This Feature Is Only For Bot",
    wait: "", // defult: "In process...",
    linkm: "", // defult: "Where is the link?",
    error: "", // defult: "Error!!",
    endLimit: "", // defult: "Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours",
    ban: "", // defult: "You have been banned by the owner, if you want to be unbanned, chat owner.",
    nsfw: "", // defult: "The nsfw feature has not been activated, please contact the admin to activate",
    banChat: "", // defult: "The bot was banned in this group, please contact the owner to unban",
  },
  setting: {
    blockchat: [], // Your block chat Jids
  },
  auto: {
    chat: {
      group: false, // Chat Bot In Group | u can set true or false
      inbox: false, // chat bot in inbox | u can set true or false
    },
    reply: {
      sticker: false, // Boolean | ===== It not created now ======
      audio: false, // Boolean | ===== It not created now ======
    },
    presence: {
      is: false, // U Can on or off this () | u can set true or false
      value: "typing", // It has two types | u can set 'recoding' or 'typing'
    },
    read: false, // Boolean | ===== It not created now ======
  },
};
