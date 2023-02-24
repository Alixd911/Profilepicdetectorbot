const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv/config')
const got = require('got'); 


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
})

client.on('ready', () => {
    console.log('Bot is Online')
})
client.on('guildMemberAdd', member => {
    const apiKey = process.env.GOTAPIKEY;
    const apiSecret = process.env.GOTAPISECRET;
    
    console.log(member.user.displayAvatarURL());
    const imageUrl = 'https://cdn.discordapp.com/avatars/440589763687219231/1dc54d5e26d1f5e6ddd22d577ee83eb8.webp?size=240';
    const image2Url = member.user.displayAvatarURL();
    const categorizer = "general_v3";
    const url = 'https://api.imagga.com/v2/images-similarity/categories/' + categorizer + '?image_url=' + encodeURIComponent(imageUrl) + '&image2_url='+encodeURIComponent(image2Url);
    
    (async () => {
        try {
            const response = await got(url, {username: apiKey, password: apiSecret});
            console.log(response.body);
        } catch (error) {
            console.log(error.response.body);
        }
    })();
})

client.login(process.env.TOKEN);