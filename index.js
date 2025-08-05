const mineflayer = require('mineflayer');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

function startBot() {
  const bot = mineflayer.createBot({
    host: config.host,
    port: config.port,
    username: config.username,
    version: false
  });

  bot.once('spawn', () => {
    console.log(`Bot ${config.username} متصل بالسيرفر!`);
    bot.chat('foxyog هنا لأبقي السيرفر شغّال');

    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
      bot.look(Math.random() * Math.PI * 2, Math.random() * Math.PI - Math.PI / 2);
    }, 15000);
  });

  bot.on('error', err => console.log('خطأ:', err));
  bot.on('end', () => {
    console.log('انقطع الاتصال، يعيد المحاولة بعد 5 ثواني');
    setTimeout(startBot, 5000);
  });
}

startBot();
require('./keepalive'); // لتشغيل سيرفر الويب
