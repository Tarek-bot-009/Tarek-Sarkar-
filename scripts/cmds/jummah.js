.cmd install o.js module.exports = {

  config: {

    name: "jummah",

    version: "1.0",

    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★", // real modified by B4D9L-B9T-007

    countDown: 5,

    role: 0,

    shortDescription: "no prefix",

    longDescription: "Admin",

    category: "auto 📟",

  },


  onStart: async function() {},


  onStart: async function({ event, message, getLang, usersData, threadsData }) {


    const data = await usersData.get(event.senderID);


    const name = data.name;


    const thread = (await threadsData.get(event.threadID))


    const threadName = thread.threadName;


    return message.reply({

      body: `▬▬▬▬▬▬▬▬▬▬▬▬\n${name}\n▬▬▬▬▬▬▬▬▬▬▬▬\n﷽𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐥𝐚𝐢𝐤𝐮𝐦﷽

     🕋︎︎︎𝐉𝐮𝐦𝐦𝐚 𝐌𝐨𝐛𝐚𝐫𝐚𝐤🕋


       🕌শুক্রবার মানেই🕌

シ︎গুনাহ シ︎মাফের シ︎আরও এক্টা シ︎সুন্দর シ︎দিন🥀

♧︎︎︎হে♧︎︎︎ আল্লাহ 🤲🤲

☘︎এই দিনের উছিলায়..!!

..আমাদের সবাইকে মাফ করে দাও☘︎.......𝐀𝐦𝐢𝐧.\n▬▬▬▬▬▬▬▬▬▬▬▬\n

-- 人 

_(___)_

_║∩║_______''人

_║∩║_____ .-:'''"''":-.

_║∩║____ (*(*(*|*)*)*)__

_║∩║____║∩∩∩∩∩∩║_

▬▬▬▬▬▬▬▬▬▬▬▬

██◣𝐉𝐮𝐦𝐦𝐚𝐡◢████}

▉▉▉▉⚄ 𝐌𝐮𝐛𝐚𝐫𝐚𝐤 ⚄▉\n▬▬▬▬▬▬▬▬▬▬▬▬`,

      attachment: await global.utils.getStreamFromURL("https://i.imgur.com/J0FeSyW.jpeg")

    });

  }

};
