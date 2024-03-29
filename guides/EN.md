# English Guide
---
## Introduction

## What is?
`Fakeplayers Addon` is a tool capable of providing the ability to generate players using commands and methods.

## What is for it?
By being able to generate these players, they will obtain `almost` all the capabilities of a normal player (like you) among these capabilities are:

|    Capabilities    |   Can?   |
| -----------        | :------: |
| Load Terrain       |    ✅    |
| Generate Mobs      |    ✅    |
| Perform Actions    |    ✅    |

## [Download](https://www.mediafire.com/file/ux4aqssczlwl9cu/Fakeplayer_1.20.70.mcpack/file)
---
## Commands guide

Prefix: `./player` <br>
Reserved method: `server`

<br>

## Basic commands
`./player <username> spawn <opcional:survival/creative>` <br>
It generates a player, it can have an optional value after the `spawn` method, this can be survival or creative, in case of not being entered any, survival will be placed by default.

`./player <username> kill` <br>
Kick the player entered in the `username` parameter.

`./player <username> respawn` <br>
Respawn the dead player.

`./player <username> tp` <br>
Teleport the entered player to your position.

<br>

## Action commands
`./player <username> jump` <br>
Causes the entered player to perform a jump.

`./player <username> attack` <br>
Causes the entered player to perform a attack.

`./player <username> use <0-9>` <br>
It makes the player select and use the slot element entered in the parameter `0-9`, if it is not a value between 0 and 9, slot 0 will be used by default, this command can also be used to select a slot.

`./player <username> interact` <br>
It makes the player interact with what he has in front of him, he will use the item he has in his hand, to select a slot you can use the command `use` mentioned above.

<br>

## Advanced commands
`./player <username> repeat <use/jump/attack/interact>` <br>
It makes the player repeat a certain action, such actions can be accumulated, that is, the player can perform 2, 3 or more actions at the same time.

`./player <username> stop` <br>
It makes the player finish repeating the previously set actions.

`./player <username> rotate <0-360>` <br>
It allows to rotate the body of the player according to the degrees entered in the parameter `<0-360>`, in case of not being any value entered, it will be set by default in `20`.

<br>

## Server commands
`./player server ?` <br>
Displays information about server methods.

`./player server reload` <br>
Reload the entire fakeplayer server.

`./player server cls/clear` <br>
Clean up the user's chat.
