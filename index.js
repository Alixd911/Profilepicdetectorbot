const { Client, GatewayIntentBits } = require('discord.js');
const deepai = require('deepai');
require('dotenv/config')


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('ready', () => {
    console.log('Bot is Online')
})
client.on('guildMemberAdd', member => {
    (async function() {
        var resp = await deepai.callStandardApi("image-similarity", {
                image1: "https://cdn.discordapp.com/avatars/440589763687219231/1dc54d5e26d1f5e6ddd22d577ee83eb8.webp?size=128",
                image2: member.user.displayAvatarURL,
        });
        console.log(resp);
    })()
});
console.log("joined");


client.login(process.env.TOKEN)
deepai.setApiKey(process.env.DEEPAITOKEN);