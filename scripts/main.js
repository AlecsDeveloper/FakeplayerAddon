import * as GameTest from "@minecraft/server-gametest";
import { world } from "@minecraft/server";
import { ephemeral, print, start } from "./src/data";
import { Client } from "./src/players";


GameTest.registerAsync('Fakeplayer','Server', async FAKEPLAYER => {

    // Players DB
    let PLAYERS = [];
    print(7,'Fakeplayer server started...');

    // Repeat Actions
    world.events.tick.subscribe(ev => {
        if (PLAYERS.length == 0) return;
        PLAYERS.forEach(x => x.Actions.forEach(z => {
            Client.Actions(FAKEPLAYER,PLAYERS,x.Player.name,world.getDimension('overworld'),z)
        }))
    })

    // Input Methods
    world.events.beforeChat.subscribe(ev => {
        // Config declarations
        let msg = ev.message.split(' ');
        const sdr = ev.sender;  
        // Check first message argument
        if (msg[0] != './player') return;
        ev.cancel = true;
        msg.splice(0,1)
        // Server Reload
        if (msg[0] == 'server') {
            if (msg[1] == '?') ephemeral('r','§2Server methods:\n§r§3 - reload §8=> Reload a fakeplayer server§r\n§3 - guide §8=> Show all fakeplayer guide§r\n§3 - users §8=> Show all fakeplayers connected§r\n§3 - cls/clear §8=> Clear chat§r',sdr);
            else if (msg[1] == 'reload') { FAKEPLAYER.succeed(); start() }
            else if (msg[1] == 'cls' || msg[1] == 'clear') ephemeral('r','\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',sdr)
            else if (msg[1] == 'guide') ephemeral('r','§2Fakeplayer Methods:\n§r§3 - ./player <username> spawn <optional:survival/creative> §8=> Spawns a fakeplayer§r\n§3 - ./player <username> kill §8=> Removes a fakeplayer§r\n§3 - ./player <username> respawn §8=> Fakeplayer respawn§r\n§3 - ./player <username> tp §8=> Fakeplayer tp§r\n§3 - ./player <username> rotate(0-360) §8=> Rotate a fakeplayer§r\n§3 - ./player <username> jump §8=> Fakeplayer jump action§r\n§3 - ./player <username> attack §8=> Fakeplayer attack action§r\n§3 - ./player <username> use <0-9> §8=> Fakeplayer use action§r\n§3 - ./player <username> interact §8=> Fakeplayer interact action§r\n§3 - ./player <username> shift §8=> Fakeplayer shift action§r\n§3 - ./player <username> repeat <use/interact/jump/attack> §8=> Fakeplayer repeat actions§r\n§3 - ./player <username> stop §8=> Fakeplayer stop repeat actions§r',sdr);
            else if (msg[1] == 'users') { 
                if (PLAYERS.length == 0) return ephemeral('r','§7Not players found§r',sdr)
                ephemeral('r','§2Fakeplayers connected:§r',sdr);
                PLAYERS.forEach(x => ephemeral('r',`§3 - ${x.Player.name}§r`,sdr) );
            }
            else ephemeral(8,"server it's a reserved word, check methods with './player server ?'",sdr)
        }
        // Connect, Disconnect && Actions 
        else if (msg[1] == 'spawn') Client.Connect(PLAYERS,msg[0],sdr,FAKEPLAYER,msg[2]);
        else if (msg[1] == 'kill') Client.Disconnect(PLAYERS,msg[0],sdr,FAKEPLAYER);
        else if (
            msg[1] == 'jump' || msg[1] == 'attack' || msg[1] == 'shift' ||
            msg[1] == 'tp' || msg[1] == 'repeat' ||  msg[1] == 'stop' ||
            msg[1] == 'interact' || msg[1] == 'respawn' || msg[1] == 'use' ||
            msg[1] == 'rotate'
        ) Client.Actions(FAKEPLAYER,PLAYERS,msg[0],sdr,msg[1],msg[2]);
        // Invalid Action
        else ephemeral('c','Syntax error',sdr);
    })

})
    .maxTicks(999999999)
    .structureName('FP:Server');

start();