module.exports = function(client) {
  

    //Constants
    const prefix = "m.";
    const Discord = require("discord.js");
    
    //Client

    client.on("message", function(message) {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();
    

        //Help Command

    
        if(command === "help") {

            const HelpEmbed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle(`${client.user.username}'s commands`)
            .setURL('https://bit.ly/3eOzWpb')
            .setDescription(`**Prefix:** m.`)
            .setThumbnail('https://cdn.discordapp.com/avatars/598800231890550806/9d009e5a4102e4fb601fd6dd3ef66833.png?size=256')
            .addField(`\`ping\``, `Check ${client.user.username}'s ping`)
            .addField(`\`kick\``, `Usage: **m.kick [@User]**\n**m.kick [@User][Reason]**`)
            .addField(`\`ban\``, `Usage: **m.ban [@User]**\n**m.ban [@User][Reason]**`)
            .addField(`\`add\``, `Adds a role to a user \nUsage: **m.add [@User] [Role]**`)
            .addField(`\`remove\``, `Removes a role from a user \nUsage: **m.remove [@User] [Role]**`)
            .addField(`\`clear\``, `Clears a number of messages between 2 and 100 \nUsage: **m.clear [number]**`)
            .addField(`\`say\``, `Have ${client.user.username} say something`)
            .addField(`\`server\``, `Check your server's member count`)
            .addField(`\`invite\``, `Invite ${client.user.username} to your server`)
            .addField(`\`rps\``, `Play rock paper scissors`)
            .addField(`\`ht\``, `Play heads or tails`)
            .addFields(
                { name: 'More Help', value: '*For more help join the [Support Server](https://discord.gg/NT2NujG)*', inline: true },
            )
            .setTimestamp()
            .setFooter(`${client.user.username}`, `https://cdn.discordapp.com/avatars/598800231890550806/9d009e5a4102e4fb601fd6dd3ef66833.png?size=256`);
        
                message.channel.send(HelpEmbed);
        
         };
    
       //Invite Command


       if(command === "invite") {
        const InviteEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setThumbnail('https://cdn.discordapp.com/avatars/598800231890550806/9d009e5a4102e4fb601fd6dd3ef66833.png?size=256')
        .addFields(
            { name: 'Mystic Machine', value: 'Invite me by [clicking here](https://discord.com/api/oauth2/authorize?client_id=598800231890550806&permissions=8&scope=bot). \n\n*If you need any help, contact us on our [support server](https://discord.gg/NT2NujG).* ' },
        )
       
        message.channel.send(InviteEmbed);
    

        }; 

    
       //Server Member Count

       if (command === "server") {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
       }

       //Ping

       if (command === "ping") {
        message.channel.send(`:ping_pong: Pong **(${Date.now() - message.createdTimestamp}ms)**`)
       }


    });

};

//321 Main Melody
