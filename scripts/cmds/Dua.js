const axios = require("axios");

const availableCmdsUrl = "https://raw.githubusercontent.com/Badol-bot-007/Badol-bot-007/main/BADOL-main-cmd.json";

const cmdUrlsJson = "https://raw.githubusercontent.com/Badol-bot-007/Badol-bot-007/main/BADOL-main-url.json";

const ITEMS_PER_PAGE = 100;


module.exports.config = {

  name: "dua",

  aliases: ["sura", "duya"],

  author: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕",

  role: 0,

  version: "6.9",

  description: {

    en: "dua of sura",

  },

  countDown: 3,

  category: "goatbot",

  guide: {

    en: "{pn} [command name | reply number]",

  },

};

module.exports.onStart = async function ({ api, event, args }) {

  const query = args.join(" ").trim();

  try {

    const response = await axios.get(availableCmdsUrl);

    let cmds = response.data.cmdName;

    let finalArray = cmds;

    let page = 1;


    if (query) {

      if (!isNaN(query)) {

        page = parseInt(query);

      } else if (query.length === 1) {

        finalArray = cmds.filter(cmd => cmd.cmd.startsWith(query));

        if (finalArray.length === 0) {

          return api.sendMessage(`❌ | No commands found starting with "${query}".`, event.threadID, event.messageID);

        }

      } else {

        finalArray = cmds.filter(cmd => cmd.cmd.includes(query));

        if (finalArray.length === 0) {

          return api.sendMessage(`❌ | Command "${query}" not found.`, event.threadID, event.messageID);

        }

      }

    }


    const totalPages = Math.ceil(finalArray.length / ITEMS_PER_PAGE);

    if (page < 1 || page > totalPages) {

      return api.sendMessage(

        `❌ | Invalid page number. Please enter a number between 1 and ${totalPages}.`,

        event.threadID,

        event.messageID

      );

    }


    const startIndex = (page - 1) * ITEMS_PER_PAGE;

    const endIndex = startIndex + ITEMS_PER_PAGE;

    const cmdsToShow = finalArray.slice(startIndex, endIndex);

    let msg = `╭━━≪𝐐𝐮𝐫𝐚𝐧 𝐓𝐡𝐞𝐤𝐞 𝐃𝐮𝐚≫━━╮\n\n𝐓𝐨𝐭𝐚𝐥 ${finalArray.length} 𝐃𝐮𝐚-&-𝐒𝐮𝐫𝐚\n\n`;

    cmdsToShow.forEach((cmd, index) => {

      msg += `❯━❯ ${startIndex + index + 1}. ${cmd.cmd}\n\n 𝐀𝐔𝐓𝐇𝐎𝐑: ${cmd.author}\n\n`;

    });

    msg += `╰━≪𝐓𝐀𝐑𝐄𝐊•𝐁𝐎𝐓•⓿⓿❼≫━╯`;


    if (page < totalPages) {

      msg += `\n\nType "${this.config.name} ${page + 1}" for more commands.`;

    }

    api.sendMessage(

      msg,

      event.threadID,

      (error, info) => {

global.GoatBot.onReply.set(info.messageID, {

          commandName: this.config.name,

          type: "reply",

          messageID: info.messageID,

          author: event.senderID,

          cmdName: finalArray,

          page: page

        });

      },

      event.messageID

    );

    console.log(finalArray)

  } catch (error) {

    api.sendMessage(

      "❌ | Failed to retrieve commands.",

      event.threadID,

      event.messageID

    );

  }

};


module.exports.onReply = async function ({ api, event, Reply }) {


  if (Reply.author != event.senderID) {

    return api.sendMessage("Who are you? 🫦", event.threadID, event.messageID);

  }

  const reply = parseInt(event.body);

  const startIndex = (Reply.page - 1) * ITEMS_PER_PAGE;

  const endIndex = startIndex + ITEMS_PER_PAGE;


  if (isNaN(reply) || reply < startIndex + 1 || reply > endIndex) {

    return api.sendMessage(

      `❌ | Please reply with a number between ${startIndex + 1} and ${Math.min(endIndex, Reply.cmdName.length)}.`,

      event.threadID,

      event.messageID

    );

  }

  try {

  const cmdName = Reply.cmdName[reply - 1].cmd

const  { status }  = Reply.cmdName[reply - 1]

    const response = await axios.get(cmdUrlsJson);

    const selectedCmdUrl = response.data[cmdName];

    if (!selectedCmdUrl) {

      return api.sendMessage(

        "❌ | Command URL not found.",

        event.threadID,

        event.messageID

      );

    }

    api.unsendMessage(Reply.messageID);

    const msg = `╭━≪𝐓𝐀𝐑𝐄𝐊•𝐁𝐎𝐓•⓿⓿❼≫━╮\n\n 𝐒𝐭𝐚𝐫𝐭 :${status || null}\n\n 🤍𝐃𝐮𝐚 𝐒𝐞𝐧𝐝 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲\n\n: ${selectedCmdUrl}\n\n╰━≪𝐓𝐀𝐑𝐄𝐊•𝐁𝐎𝐓•⓿⓿❼≫━╯`;

    api.sendMessage(msg, event.threadID, event.messageID);

  } catch (error) {

    api.sendMessage(

      "❌ | Failed to retrieve the command URL.",

      event.threadID,

      event.messageID

    );

  }

};
