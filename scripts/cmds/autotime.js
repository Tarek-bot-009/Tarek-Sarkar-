const moment = require('moment-timezone');

module.exports.config = {
  name: "autotime",
  version: "2.0.0",
  role: 0,
  author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",//don't change the author kung ayaw mong ma pwetan!! 
  description: "autotime",
  category: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const arrayData = {
     "12:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-দুপুর⏰ 12:00 𝐏𝐌\n\n📌 স্কুল ছুটি দিছে চলো সবাই মাল দেখে আসি 😘"
      },
      "01:00:00 AM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-রাত⏰ 01:00 𝐀𝐌\n\n📌 সবাই এখন গিটার বাজানো বন্ধ কর 🤐"
      },
      "02:00:00 AM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-রাত⏰ 02:00 𝐀𝐌\n\n📌 অনেক তো গিটার বাজাইছো এবার একটু ঘুমাও 😒"

      },
      "03:00:00 AM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-রাত⏰ 03:00 𝐀𝐌\n\n📌 কে কে এখনো ঘুমাও নাই আমার মত 🥺"
        
      },
      "04:00:00 AM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-রাত⏰ 04:00 𝐀𝐌\n\n📌  একটু পরে ফজরের আজান হবে নামাজ পড়ে নিও সবাই 😊"

      },
      "05:00:00 AM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-ভোর⏰ 05:00 𝐀𝐌\n\n📌 ভোর হয়ে গেল এখনো ঘুম থেকে ওঠো নাই কিভাবে উঠবে সারারাত তো google ক্রমে ছিলা 😑"
        
      },
      "06:00:00 AM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-সকাল⏰ 06:00 𝐀𝐌\n\n📌 শুভ সকাল সবাইকে ☺"
        
      },
      "07:00:00 AM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-সকাল⏰ 07:00 𝐀𝐌\n\n📌 যে যার কাজে বেরিয়ে পড়ো 😢"
        
      },
      "08:00:00 AM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-সকাল⏰ 08:00 𝐀𝐌\n\n📌 এখনো অনেক জমিদারের বাচ্চারা ঘুমিয়ে আছে 🙄"
        
      },
      "09:00:00 AM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-সকাল⏰ 09:00 𝐀𝐌\n\n📌 তোমাদেরকে ডাকতে ডাকতে নয়টা বেজে গেল এবার তো ঘুম থেকে ওঠো 😐"
        
      },
      "10:00:00 AM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-সকাল⏰ 10:00 𝐀𝐌\n\n📌 কিছু জমিদারের বাচ্চারা এখন ঘুম থেকে উঠে ফ্রেশ হবে 😟"
        
      },
      "11:00:00 AM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-সকাল⏰ 11:00 𝐀𝐌\n\n📌  অনেক তো কাজ করেছ যাও এখন হালকা নাস্তা করে এসো ☺"
        
      },
      "12:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-দুপুর⏰ 12:00 𝐏𝐌\n\n📌  দুপুর ১২ টা মানেই আর একটু পরে আল্লাহ তোমাকে আল্লাহর ঘরে ডাক দিবে 💚"
        
      },
      "01:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-দুপুর⏰ 01:00 𝐏𝐌\n\n📌 এখন যোহরের আজান হবে সবাই ফ্রেশ হয়ে নামাজে যাও 🚶"
        
      },
      "02:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-দুপুর⏰ 02:00 𝐏𝐌\n\n📌 এখন দুপুর ২টা বাজে সবাই দুপুরের খাবার খেয়ে নাও😎 "
        
      },
      "03:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-দুপুর⏰ 03:00 𝐏𝐌\n\n 📌 এখন দুপুর ৩টা বাজে সারাদিন কাজ করছো এবার একটু ঘুমাও:("
        
      },
      "04:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-বিকাল⏰ 04:00 𝐏𝐌\n\n📌 এখন বিকাল ৪টা বাজে বড়দের স্কুল ছুটি দিয়ে দিছে চল মেয়ে দেখে আসি😸"
        
      },
      "05:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-বিকাল⏰ 05:00 𝐏𝐌\n\n📌 এখন বিকাল ৫টা বাজে একটু পর আসরের আযান দিবে সবাই নামাজ পড়ে নিও 😎"
        
      },
      "06:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-সন্ধ্যা⏰ 06:00 𝐏𝐌\n\n📌 এখন সন্ধ্যা ৬টা বাজে মাগরিবের আযান দিলে সবাই নামাজ পড়ে নাও🥀 নামাজ পড়ে বাড়িতে এসে কিছু খেয়ে নাও এবং পরিবারের সাথে সময় কাটাও🙏"
        
      },
      "07:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-সন্ধ্যা⏰ 07:00 𝐏𝐌\n\n📌 এখন সন্ধ্যা ৭ টা বাজে নামাজ শেষ করে সবাই বই নিয়ে পড়তে বসো😎"
        
      },
      "08:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-রাত⏰ 08:00 𝐏𝐌\n\n📌 এখন রাত ৮টা বাজে একটু পর এশারের আযান দিবে সবাই নামাজ পড়ে নিও❤"
        
      },
      "09:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-রাত⏰ 09:00 𝐏𝐌\n\n📌 এখন কিছু গাঁজা খোররা নদীর পাশে বসে গাঁজা টানবে 🙄"
        
      },
      "10:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-রাত⏰ 10:00 𝐏𝐌\n\n📌 এখন রাত ১০টা বাজে সবাই রাতের খাবার খেয়ে ঘুমাও🥰"
        
      },
      "11:00:00 PM": {
        message: "𝐓𝐀𝐑𝐄𝐊 𝐁𝐎𝐓___//𝟎𝟎𝟕:\n▬▬▬▬▬▬▬▬▬▬▬▬\n🔔-এখন-সময়-রাত⏰ 11:00 𝐏𝐌\n\n📌 এখন রাত 11টা বাজে সবাই ঘুমায় পড়ো আমার বউ নাই ভাই তাই ঘুম ও আসে না."
      }

    // Add more messages for other times as needed
  };

  const checkTimeAndSendMessage = () => {
    const now = moment().tz('Asia/Dhaka');
    const currentTime = now.format('hh:mm:ss A');

    const messageData = arrayData[currentTime];

    if (messageData) {
      const tid = global.db.allThreadData.map(i => i.threadID);
      tid.forEach(async (threadID, index) => {
        api.sendMessage({ body: messageData.message }, threadID);
      });
    }

    const nextMinute = moment().add(1, 'minute').startOf('minute');
    const delay = nextMinute.diff(moment());
    setTimeout(checkTimeAndSendMessage, delay);
  };

  checkTimeAndSendMessage();
};

module.exports.onStart = () => {};
