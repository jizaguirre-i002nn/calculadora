"use strict"

//definimos variables a utilizar
let primerNumero , segundoNumero , tipoOperacion, resultado;

//Definimos una funcion para limpiar la pantalla
function limpiarPantalla() {

    

    pantalla.value = " ";
}

//Definimos una funcion para marcar botonos
function marcarBoton(boton) {


    pantalla.value = pantalla.value + boton;

}

//Definimos una funcion para cambiar el signo

function cambiarSigno() {

    pantalla.value = Number(pantalla.value) * -1;

}

//Definimos una funcion para calcular la operacion
function operacion(op){

    primerNumero = Number(pantalla.value);
    tipoOperacion = Number(op);
    limpiarPantalla();
}

//Definimos una funcion para calcular la operacion
function calcular() {

    segundoNumero = Number(pantalla.value);

    switch (tipoOperacion) {

        case 1:
            resultado = primerNumero + segundoNumero;
        break;
        case 2:
            resultado = primerNumero - segundoNumero;
        break;

        case 3:
            resultado = primerNumero * segundoNumero;
        break;
        case 2:
            resultado = primerNumero / segundoNumero;
        break;

        case 5:
            resultado = Math.pow(primerNumero , segundoNumero);
        break;
        
    }

    pantalla.value = resultado;
}

//definimos una funcion para el porcentaje
function porcentaje() {

    segundoNumero = Number(pantalla.value)
    resultado = primerNumero * (segundoNumero/100);
    pantalla.value = resultado;
    
}