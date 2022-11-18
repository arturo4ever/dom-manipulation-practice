let piedra = "piedra", 
papel = "papel", 
tijera = "tijera";

function ppt(player) {
    let cpu = [piedra, papel, tijera],
    n = Math.floor(Math.random()*3);
    console.log(n);
    console.log(cpu[n]);

    
    if (player == cpu[n]) {
        console.log("draw");
        ppt(player);
    } else if ((player == piedra) && (cpu[n] == tijera)) {

        console.log("Ganaste");

    } else if ((player == papel) && (cpu[n] == piedra)) {

        console.log("Ganaste");

    } else if ((player == tijera) && (cpu[n] == papel)) {

        console.log("Ganaste");

    } else if ((player == piedra) && (cpu[n] == papel)) {

        console.log("Perdiste");

    } else if ((player == papel) && (cpu[n] == tijera)) {

        console.log("Perdiste");
        
    } else if ((player == tijera) && (cpu[n] == piedra)) {

        console.log("Perdiste");
        
    } else {
        console.log("Jugada inválida");
    }

}

ppt("piedra");