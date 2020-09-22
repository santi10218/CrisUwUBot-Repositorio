const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const MessageEmbed = require('discord.js');

client.on('ready', () => {
  // Notifica a la consola que el bot está listo
  console.log(`[INFO]: ${client.user.tag} está mamadisimo. Listo para cojer.`);

  client.user.setPresence({ game: { name: 'usa p!help para ver los comandos' }, status: 'dnd' })
})

client.on("message", message => {
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Definiendo los argumentos
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Procesador de comandos
  try {
    console.log("[INFO]: " + message.author.tag + " executed '" + command + "'");
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args, Discord);
  } catch (err) {
    console.log("[ERROR]: '" + command + "' is not an existing command.");
    console.error("[ERROR]: " + err.message);
	message.reply('El comando solicitado no existe');
  }
});
 client.login('NzU3MjgzNzIzMDY1NDI1OTMy.X2eJbQ.mSCWhZfbcpVTYyysqPmU-UQ9vBA')