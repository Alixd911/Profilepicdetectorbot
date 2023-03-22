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
    

    const imageUrl = 'INSERT HERE PHOTO LINK';
    const imageUrl2 = 'INSERT HERE PHOTO LINK';
    const imageUrl3 = 'INSERT HERE PHOTO LINK';
    const imageUrl4 = 'INSERT HERE PHOTO LINK';
    const imageUrl5 = 'INSERT HERE PHOTO LINK';
    const imageUrl6 = 'INSERT HERE PHOTO LINK';
    const imageUrl7 = 'INSERT HERE PHOTO LINK';
    const imageUrl8 = 'INSERT HERE PHOTO LINK';
    const imageUrl9 = 'INSERT HERE PHOTO LINK';
    const imageUrl10 = 'INSERT HERE PHOTO LINK';
    const imageUrl11 = 'INSERT HERE PHOTO LINK';
    const imageUrl12= 'INSERT HERE PHOTO LINK';
    const imageUrl13 = 'INSERT HERE PHOTO LINK';
    const imageUrl14 = 'INSERT HERE PHOTO LINK';
    const imageUrl15 = 'INSERT HERE PHOTO LINK';
    const image2Url = member.user.displayAvatarURL(({extension: "png", size: 256})).toString()
    const categorizer = "general_v3";
    const url = 'https://api.imagga.com/v2/images-similarity/categories/' + categorizer + '?image_url=' + encodeURIComponent(imageUrl) + '?image_url2=' + encodeURIComponent(imageUrl2) + '?image_url3=' + encodeURIComponent(imageUrl3) + '?image_url4=' + encodeURIComponent(imageUrl4) + '?image_url5=' + encodeURIComponent(imageUrl5) + '?image_url6=' + encodeURIComponent(imageUrl6) + '?image_url7=' + encodeURIComponent(imageUrl7) + '?image_url8=' + encodeURIComponent(imageUrl8) + '?image_url9=' + encodeURIComponent(imageUrl9) + '?image_url10=' + encodeURIComponent(imageUrl10) + '?image_url11=' + encodeURIComponent(imageUrl11) + '?image_url12=' + encodeURIComponent(imageUrl12) + '?image_url13=' + encodeURIComponent(imageUrl13) + '?image_url14=' + encodeURIComponent(imageUrl14) + '?image_url15=' + encodeURIComponent(imageUrl15) +  '&image2_url='+encodeURIComponent(image2Url);
    
    (async () => {
        try {
            const response = await got(url, {username: apiKey, password: apiSecret});
            const obj = JSON.parse(response.body);
            if (obj.result.distance <  1.0)  {//only change the obj.result.distance if he bans people to fast you only need to lower it!
                console.log(obj.result.distance)
                console.log("You're banned")
                member.ban({ reason: "Scammer" });
            } 
            } catch (error) {
                JSON.parse(error.response.body);
                console.log("Nothing happends")

            }
    })();
})

client.login(process.env.TOKEN);
