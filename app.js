//variables

let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//manejo del texto
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
//texto a manejar
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego Del Numero Secreto');
    asignarTextoElemento('p',`Digita un numero del 1 al ${numeroMaximo}`);  
    numeroSecreto = generarNumeroAleatorio();
    numeroIntentos = 1; 
}




//Generar numero aleatorio
function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;


    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Todos los numero ya se han sorteado');
    }else{

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}   

//verefica si el numero es correcto
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos'}`);
        limpiarCampo();
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p',`El numero secreto es menor al numero ${numeroUsuario}, llevas ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos'}`);
        }else{
            asignarTextoElemento('p',`El numero secreto es mayor al numero ${numeroUsuario}, llevas ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos'}`);
        }
        numeroIntentos++;
        limpiarCampo();
    }
    return;
}

//limpiar
function limpiarCampo() {
    let valorCampo = document.getElementById('numeroUsuario').value = '';
}

//reniciar
function reiniciarjuego() {
    //limpiar el campo
    limpiarCampo();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //deshabilitar nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();
