import { world } from '@minecraft/server'

const ephemeral = (color,msg,sender) => sender.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§${color}${msg}"}]}`);
const print = (color,msg) => world.getDimension('overworld').runCommandAsync(`tellraw @a {"rawtext":[{"text":"§${color}${msg}"}]}`);
const start = () => world.getDimension('overworld').runCommandAsync('execute positioned 999999999 200 999999999 run gametest run fakeplayer:server');

export { ephemeral, print, start }