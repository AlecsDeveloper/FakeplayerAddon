# Guía en Español
---
## Introducción

## ¿Qué es?
`Fakeplayers Addon` es una herramienta capaz de proporcionar la capacidad de generar jugadores mediante comandos y metodos.

## ¿Para que sirve?
Al poder generar dichos jugadores, estos obtendran `casi` todas las capacidades de un jugador normal (cómo tú) entre dichas capacidades se encuentran:

|    Capacidades    |  Puede?  |
| -----------       | :------: |
| Cargar Terreno    |    ✅    |
| Generar Mobs      |    ✅    |
| Realizar Acciones |    ✅    |

## [Descarga](https://www.mediafire.com/file/qsf0xswv7duzgi3/Fakeplayer_1.19.80.mcpack/file)

---
## Guía de comandos

Prefix: `./player` <br>
Metodo reservado: `server`

<br>

## Comandos basicos
`./player <username> spawn <opcional:survival/creative>` <br>
Genera un jugador, puede tener un valor opcional despues del metodo `spawn`, este puede ser survival o creative, en caso de no ser ingresado ninguno, se colocara survival por defecto.

`./player <username> kill` <br>
Expulsa al jugador ingresado en el parametro `username`.

`./player <username> respawn` <br>
Respawnea un jugador muerto.

`./player <username> tp` <br>
Teletransporta el jugador ingresado hacía tu posición.

<br>

## Comandos de acciones
`./player <username> jump` <br>
Hace que el jugador ingresado realize un salto.

`./player <username> attack` <br>
Hace que el jugador ingresado realize un ataque.

`./player <username> use <0-9>` <br>
Hace que el jugador seleccione y use el elemento del slot ingresado en el parametro `0-9`, de no ser un valor entre el 0 y 9, se usara por defecto el slot 0, este comando tambien puede ser utilizado para seleccionar un slot.

`./player <username> interact` <br>
Hace que el jugador interactue con lo que tiene delante de el, usara el item que tenga en la mano, para seleccionar un slot se puede usar el comando `use` mencionado anteriormente.

<br>

## Comandos avanzados
`./player <username> repeat <use/jump/attack/interact>` <br>
Hace que el jugador repita una accion determinada, dichas acciones pueden ser acumuladas, es decir, el jugador puede realizar 2, 3 o más acciones al mismo tiempo.

`./player <username> stop` <br>
Hace que el jugador termine de repetir las acciones anteriormente establecidas.

`./player <username> rotate <0-360>` <br>
Permite rotar el cuerpo del jugador conforme a los grados ingresados en el parametro `<0-360>`, en caso dde no ser ningun valor ingresado, se establecera por defecto en `20`.

<br>

## Comandos del servidor
`./player server ?` <br>
Muestra la información sobre los metodos del servidor.

`./player server reload` <br>
Recarga todo el servidor de fakeplayer.

`./player server cls/clear` <br>
Limpia el chat del usuario.
