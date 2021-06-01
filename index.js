//All Constants

const express = require( 'express' );
let app = express(),
Discordie = require( 'discordie' ),
Events    = Discordie.Events;

const
config = require( './config/index.js' ), //Token File
Client = new Discordie( { autoReconnect : true } );

const Discord = require("discord.js")
const client = new Discord.Client()

   //Bot Activity Status


 //client.on('ready', () => {
    //console.log(`${client.user.tag} is Online!`) //Logs
    //setInterval(() => {
        //client.user.setActivity(`${client.guilds.cache.size} Servers | m.help`, { type: 'WATCHING' })
    //}, 60000); // Runs this every 60 seconds.
 //});

   //Bot Status 2

    client.on('ready', () => {
    console.log(`${client.user.tag} is Online!`) //Logs
    client.user.setActivity(`Juice WRLD | m.help`, { type: 'LISTENING' })

    });

   //Maintain Port Connection
  
 try {
	app.listen( config.port, () => {
		console.log( 'Express server listening on port ', config.port );
		Client.connect( {
			token : config.token
		} );
	} );
	
  } catch ( e ) {
	console.log( JSON.stringify( e ) );
 }
  
  //Require Command Files

  require('./commands/help.js')(client);
  require('./commands/utility.js')(client);
  

  //Login Token 
client.login(config.token);
