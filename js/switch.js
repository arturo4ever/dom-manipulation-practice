let piedra = "piedra", 
papel = "papel", 
tijera = "tijera";

function ppt(player) {
    let cpu = [piedra, papel, tijera],
    n = Math.floor(Math.random()*3);
    console.log(n);
    console.log(cpu[n]);

    switch (player) {
        case piedra:
            switch (cpu[n]) {
                case piedra:
                    console.log("Draw");
                    break;
                case papel:
                    console.log("Perdiste");
                    break;
                case tijera:
                    console.log("Ganaste");
                    break;
            }
                break;
        case papel:
            switch (cpu[n]) {
                case piedra:
                    console.log("Ganaste");
                    break;
                case papel:
                    console.log("Draw");
                    break;
                case tijera:
                    console.log("Perdiste");
                    break;
            }
                break;
        case tijera:
            switch (cpu[n]) {
                case piedra:
                    console.log("Perdiste");
                    break;
                case papel:
                    console.log("Ganaste");
                    break;
                case tijera:
                    console.log("Draw");
                    break;
            }
                break;
        default:
            console.log("Jugada inválida");
    }
}

ppt("papel");