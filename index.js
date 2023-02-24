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
    

    const imageUrl = 'https://cdn.discordapp.com/avatars/440589763687219231/1dc54d5e26d1f5e6ddd22d577ee83eb8.png';
    const imageUrl2 = 'https://cdn.discordapp.com/avatars/216276530047877130/452ebffe21bed6ab2321f99b89e4f213.png';
    const imageUrl3 = 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const imageUrl4 = 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const imageUrl5 = 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const imageUrl6 = 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const imageUrl7 = 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const imageUrl8 = 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const imageUrl9 = 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const imageUrl10 = 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const imageUrl11 = 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const imageUrl12= 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const imageUrl13 = 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const imageUrl14 = 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const imageUrl15 = 'INSERT HERE PHOTO LINK MIKE 1 en 2 zijn al goed';
    const image2Url = member.user.displayAvatarURL(({extension: "png", size: 256})).toString()
    const categorizer = "general_v3";
    const url = 'https://api.imagga.com/v2/images-similarity/categories/' + categorizer + '?image_url=' + encodeURIComponent(imageUrl) + '?image_url2=' + encodeURIComponent(imageUrl2) + '?image_url3=' + encodeURIComponent(imageUrl3) + '?image_url4=' + encodeURIComponent(imageUrl4) + '?image_url5=' + encodeURIComponent(imageUrl5) + '?image_url6=' + encodeURIComponent(imageUrl6) + '?image_url7=' + encodeURIComponent(imageUrl7) + '?image_url8=' + encodeURIComponent(imageUrl8) + '?image_url9=' + encodeURIComponent(imageUrl9) + '?image_url10=' + encodeURIComponent(imageUrl10) + '?image_url11=' + encodeURIComponent(imageUrl11) + '?image_url12=' + encodeURIComponent(imageUrl12) + '?image_url13=' + encodeURIComponent(imageUrl13) + '?image_url14=' + encodeURIComponent(imageUrl14) + '?image_url15=' + encodeURIComponent(imageUrl15) +  '&image2_url='+encodeURIComponent(image2Url);
    
    (async () => {
        try {
            const response = await got(url, {username: apiKey, password: apiSecret});
            const obj = JSON.parse(response.body);
            if (obj.result.distance <  1.0)  {
                console.log(obj.result.distance)
                console.log("je bent gebanned")
                member.ban({ reason: "Scammer" });
            }
            } catch (error) {
                JSON.parse(error.response.body);
                console.log("niks aan de hand")

            }
    })();
})

client.login(process.env.TOKEN);