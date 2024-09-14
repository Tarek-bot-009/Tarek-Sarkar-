module.exports = {
  config: {
    name: "info",
    version: "1.0",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★", // meant author  by mbc k1ng 007
    countDown: 5,
    role: 0,
    shortDescription: "admin and info",
    longDescription: "bot owner info",
    category: "auto ✅",
  },

  onStart: async function () {},

  onStart: async function ({ event, message, getLang, usersData, threadsData }) {

      const data = await usersData.get(event.senderID);

      const name = data.name;

      const thread = await threadsData.get(event.threadID);

      const threadName = thread.threadName;

      const currentDate = new Date();

      const options = { year: "numeric", month: "numeric", day: "numeric" };

      const date = currentDate.toLocaleDateString("en-US", options);

      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: true,
      });

      const img = `https://graph.facebook.com/100089702123718/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

      const msg = `╔╝❮${name}❯╚╗\n━━━━━━━━━━━━━━━━━━━━━━\n𝐍𝐀𝐌𝐄: 𝐓𝐀𝐑𝐄𝐊 𝐒𝐀𝐑𝐊𝐀𝐑\n𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐈𝐒𝐋𝐀𝐌\n𝐀𝐃𝐃𝐑𝐄𝐒𝐒: 𝐌𝐘𝐌𝐄𝐍𝐒𝐈𝐍𝐆𝐇\n𝐆𝐄𝐍𝐃𝐄𝐑: 𝐌𝐀𝐋𝐄\n𝐀𝐆𝐄: 𝟏𝟗\n𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: 𝐒𝐈𝐍𝐆𝐋𝐄\n𝐖𝐎𝐑𝐊: 𝐒𝐓𝐔𝐃𝐄𝐍𝐓\n𝐆𝐌𝐀𝐈𝐋: tareksarkar620@gmail.com\n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: https://www.facebook.com/tarek.20.king \n𝐌𝐀𝐒𝐒𝐄𝐍𝐆𝐄𝐑: https://m.me/tarek.20.king\n𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏: wa.me/+88017******36\n𝐈𝐌𝐎: 017******36\n𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌: Tarek Sarkar \n━━━━━━━━━━━━━━━━━━━━━━\n\nBot Prefix: ( $ )\nBot Name: 𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟕𝟕\ngc Name: ${threadName}\nTime:【 ${date} || ${time} \n━━━━━━━━━━━━━━━━━━━━━━`;

      message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  };
