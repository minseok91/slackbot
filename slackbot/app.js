const { App } = require('@slack/bolt');
require('dotenv').config()

const app = new App({
  token: process.env.BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});
// app.message('*', async ({ message, say }) => {
//   await say(`Hey there <@${message.user}>!`);
// });
app.message('hello', async ({ message, say }) => {
  await say(`Hey there <@${message.user}>!`);
});
app.command('/hello', async ({ message, say }) => {
  await say(`@@@Hey there <@>!`);
});
app.message('5번서버', async ({ message, say }) => {
  await say(`5번서버 접속정보 `);
});
app.message('문화정보원 엑셀', async ({ message, say }) => {
  await say(`5번서버 접속정보 
            
            pw : dasdas
            `);
});
//
app.message(/(.+)접속정보/, async ({ message, say }) => {
  await say(`5번서버 접속정보 :
            
            pw : dasdas`);
});


(async () => {
  await app.start();
  console.log('⚡️ Bolt app started');
})();
