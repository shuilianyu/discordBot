require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS]
}); //create new client
// const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS], fetchAllMembers: true});



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    console.log('content: ', msg.content);
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

// console.log('process.env.CLIENT_TOKEN: ', process.env.CLIENT_TOKEN);
//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token