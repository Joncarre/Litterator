console.log("WELCOME TO BLACKJACK")

// Retorna una carta entre 1 y 11
function getRandomCard(){
    return Math.floor(Math.random() *11) + 1
}

// Retorna el resultado final de la partida
function getMessage(mano){
    if(mano == 21){
       return "BLACKJACK"
    }else{
        // Forma corta de poner una sentencia if-
        let mensaje = mano > 21 ? "PERDISTE" : "Sigue jugando"
        return mensaje
    }
}

// Obtenemos dos cartas aleatorias
let carta1 = getRandomCard()
let carta2 = getRandomCard()

// Mostramos sus valores
console.log("carta1: "+ carta1 + " carta2: "+ carta2)
let mano = carta1 + carta2
console.log("mano: "+ mano)

// Comprobamos el estado actual de nuestra mano
let message = getMessage(mano)
// Si el mensaje es que tenemos que seguir jugando, pues seguimos jugando
while(message == "Sigue jugando"){
    // Para ello, obtenemos una nueva carta
    mano += getRandomCard();
    // Y actualizamos el mensaje
    let message = getMessage(mano)
}

// Mostramos el mensaje final al terminar la partida
console.log(message)