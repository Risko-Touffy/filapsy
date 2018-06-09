const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame("Filapsy -help")
  console.log(`Le bot à bien été connecté ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '-ping') {
    msg.reply(':ping_pong: Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === '-help') {
    msg.channel.send(':mega:                                                                                                                                                                                                                                     1. help                                                                                                                                                                                                                                     2. ping                                                                                                                                                                                                                                     3. wtf                                                                                                                                                                                                                                     4. dev');
  }
});

client.on('message', msg => {
  if (msg.content === '-wtf') {
    msg.reply(':mega: :mega: :mega: C EST QUI LE PATRON ? C EST MOI LE PATRON ! :mega: :mega: :mega:' );
  }
});

client.on('message', msg => {
  if (msg.content === '-dev') {
    msg.channel.send('I was created and developed by Fabian! Here is the link if you want to invite me: https://discordapp.com/oauth2/authorize?client_id=455064413750427649&scope=bot&permissions=2146958591  =D ');
  }
});

client.login('NDU1MDY0NDEzNzUwNDI3NjQ5.Df2jbA.LhM2PKuRDx6845XuxJ7iPA-eSXw');
