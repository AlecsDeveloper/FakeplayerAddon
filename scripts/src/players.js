import { BlockLocation } from '@minecraft/server'
import { ephemeral } from './data.js'

export const Client = {

    Connect: function(...args) {
        // Config declarations
        const DB = args[0], username = args[1], sender = args[2], event = args[3], gamemode = args[4];
        const exist = DB.findIndex(x => x.Player.name === username);
        // Fakeplayer connection check
        if (exist >= 0) return ephemeral(7,`${username} are connected`,sender)
        // Fakeplayer connection
        const FAKEPLAYER = event.spawnSimulatedPlayer(new BlockLocation(0,4,0), username)
        FAKEPLAYER.setGameMode(gamemode == 'creative' || gamemode == 'creative' ? gamemode : 'survival');
        FAKEPLAYER.teleport(sender.location, sender.dimension, sender.location.x, sender.location.y);
        FAKEPLAYER.runCommandAsync('spawnpoint @s')
        // Pushed player to DB
        DB.push({ Player: FAKEPLAYER, Actions: [] })
    },

    Disconnect: function(...args) {
        // Config declarations
        const DB = args[0], username = args[1], sender = args[2], event = args[3];
        const exist = DB.findIndex(x => x.Player.name === username);
        // Fakeplayer disconnection check
        if (exist < 0) return ephemeral(8,'You can only manipulate existing players',sender);
        // Fakeplayer disconnection
        const FAKEPLAYER = DB[exist].Player;
        FAKEPLAYER.kill();
        event.removeSimulatedPlayer(FAKEPLAYER)
        // Removed player from DB
        DB.splice(exist, 1);
    },

    Actions: function(...args) {
        // Config declarations
        const EVENT = args[0], DB = args[1], username = args[2], sender = args[3], action = args[4];
        const exist = DB.findIndex(x => x.Player.name === username);
        // Fakeplayer disconnection check
        if (exist < 0) return ephemeral(8,'You can only manipulate existing players',sender);
        // Fakeplayer action
        const FAKEPLAYER = DB[exist].Player;
        if (action == 'jump') FAKEPLAYER.jump();
        else if (action == 'attack') FAKEPLAYER.attack();
        else if (action == 'tp') FAKEPLAYER.teleport(sender.location, sender.dimension, sender.location.x, sender.location.y);
        else if (action == 'shift') FAKEPLAYER.isSneaking ? FAKEPLAYER.isSneaking = false : FAKEPLAYER.isSneaking = true;
        else if (action == 'respawn') FAKEPLAYER.respawn();
        else if (action == 'use') FAKEPLAYER.useItemInSlot(args[5] >= 0 || args[5] <= 9 ? parseInt(args[5]) : 0);
        else if (action == 'interact') FAKEPLAYER.interact();
        else if (action == 'rotate') FAKEPLAYER.rotateBody(parseInt(args[5]) || 20);
        // Repeat action
        else if (action == 'repeat') {
            const ACTIONS = DB[exist].Actions;
            if (
                args[5] == 'jump' ||
                args[5] == 'attack' ||
                args[5] == 'break' ||
                args[5] == 'use' || 
                args[5] == 'interact'
            ) ACTIONS.push(args[5]);
            else ephemeral(7,'Invalid action to repeat',sender);
        }
        // Stop action
        else if (action == 'stop') DB[exist].Actions = [];
    }
    
}