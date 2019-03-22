const {Client, RichEmbed} = require('discord.js');
const client = new Client();

client.on('ready',()=> {
    console.log(`Bot is ready as ${client.user.tag}`);

    // CAMBIAR EL ESTADO DEL BOT
    client.user.setStatus('dnd');
    // SABER EL ESTADO ACTUAL DEL BOT
    console.log(client.user.presence.status);
});

client.on('message',(message)=> {

    console.log(message.content);

    // DEVUELVE UN MENSAJE 
    if (message.content === 'ping'){
        message.reply('pong');
    }
    // DEVUELVE UN MENSAJE AL CANAL
    if (message.content === 'hello' ){
        message.channel.send(`hello ${message.author} nice to meet you :)`);
    }
    // DEVUELVE UN MENSAJE CUANDO EL MENSAJE INCLUYA !TEST
    if (message.content.includes('!test')) {
        message.channel.send('whats up bruh!');
    }
    // DEVUELVE UN MENSAJE CON URL
    if (message.content === '!roy') {
        message.channel.send('https://www.facebook.com/roy.cabreraayala');
    }
    // REPONDER UN MENSAJE CON ESTILOS
    if (message.content === '!pretty') {
        const embed = new RichEmbed().addField('ROY CABRERA AYALA','Hola estas en mi servidor :)');
        message.channel.send(embed);
    }
    // MENSAJES PERZONALIZADOS
    if (message.content === '!hi') {
        const embed = new RichEmbed()
            .setTitle('Roy')
            .setColor('#3fcccc')
            .setAuthor('Roy','http://static.t13.cl/images/sizes/1200x675/1528238236-jared-leto-joker.jpg')
            .setTimestamp();
        message.channel.send(embed);
    }
    // ELIMINAR MENSAJE
    if (message.content === 'mierda') {
        message.channel.send('No digas esas palabras');
        message.delete();
    } 
    // ELIMINAR TODOS LOS MENSAJES
    if (message.content === '!clear') {
        message.channel.fetchMessages({limit:100})
            .then((messages)=>{
                message.channel.bulkDelete(messages);
                console.log('messages deleted')
            });
    }

});

client.login('NTU3MDEwODIwMTExMDA3NzQ0.D3CGfg.QcIPThdGXvqN-PLCii2Yl8_dvtk');