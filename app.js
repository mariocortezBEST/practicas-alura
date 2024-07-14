
let numeroSecreto = 0;
let intentos=1;
let listaNumerosSorteados = [];
let numeroMaximo =10; 

//declaracion de la funcion

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
   if(numeroDeUsuario===numeroSecreto){
       asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos===1)? 'intento':'intentos'}`);
       document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
      if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','el numero secreto es menor');
      }else{
        asignarTextoElemento('p', 'el numero secreto es mayor')
      }
      intentos++;
      limpiarCaja();
   }
    

    return;

}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')

    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            numeroJuegos++;
    
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
   

    // lo que sigue abajo son parte de una tarea extra.
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    /*
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = ' ';
    */

}
//quitar comentario de multiples lineas aqui tambien.


function condicionesIniciales(){
    
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;

}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar numeros aleatorios
    //Inicializar el numero de intentos
    condicionesIniciales();

    //deshabilitar el boton de  nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
 
    
}
condicionesIniciales();

/*
function Saludo() {
    console.log('¡Hola, Mundo!');
    return ;
    
}

function saludoNombre(nombre) {
    console.log(`¡Hola ${nombre}`);
    return;
    
}
function doble(numero) {
    let dob= numero*2;
    console.log(dob);
    return dob;
    
}
function promedio(num1,num2,num3){
    let prom= (num1+num2+num3)/3;
    console.log(prom);
    return prom;
}
function numeroMayor(num1,num2) {
    let mayor=0;
    if(num1>num2){
        mayor=num1;
    }else if(num1<num2){
        mayor=num2;
    }else{
       mayor=num1;
       alert(`Los numero evaluados son iguales y su valor es ${mayor}`);
     
    return mayor;
}
console.log(mayor);
}
/*
/*
saludoNombre('Mario');
Saludo(); 
doble(8);
promedio(7,7,7);
numeroMayor(6,8);
*/
//salvo estas dos llamadas a la funcion asignarTextoElemento que son parte del codigo original.
/******************************************Desafios:**********************************/
/*
function indiceMasaCorporal(altura, peso){
    let imc= peso/(altura*altura);
    console.log(imc);
    return imc;
}
function factorialNumero(numero) {
    let factorial=1;
    for(let i=1; i<=numero;i++){
        factorial*=i;
    }
    console.log(factorial);
    return factorial;
   
}
function conversionDolarPesos(dolar, cotizacion){
    let equivalente = dolar*cotizacion;
    console.log(equivalente);
    return equivalente;

}
function area(base, altura) {
    let areaRectangulo= base*altura;
    console.log(areaRectangulo);
    return areaRectangulo;
    
}
function perimetro(base, altura) {
    let perimetroRectangulo=2*(base+altura);
    console.log(perimetroRectangulo);
    return perimetroRectangulo;
    
}
function areaPerimetro(base, altura) {
    area(base,altura);
    perimetro(base,altura);
    
}
function areaCirculo( radio) {
    let area= 3.14*(radio*radio);
    console.log(area);
    return area;
    
}
function perimetoCirculo(radio){
    let perimetro= (2*3.14)*radio;
    console.log(perimetro);
    return perimetro;

}
function areaPerimetorCirculo(radio) {
    areaCirculo(radio);
    perimetoCirculo(radio);
}
function tablaMultiplicar(numero) {
    for(let i=0; i<=10;i++){
        let producto= numero*i;
        console.log(producto);
    }
    
}
    indiceMasaCorporal(1.80, 84.5);
factorialNumero(5);
conversionDolarPesos(0.5, 1500);
areaPerimetro(4, 2);
areaPerimetorCirculo(2);
tablaMultiplicar(5);
*/    
/**************************************desafio lista generica************************ */
/*
let listaGenerica = [];
let listaLenguajesProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
listaLenguajesProgramacion.push('Java','Ruby', 'Golang');
function mostrarLista(lista) {
    for(let i= 0; i<listaLenguajesProgramacion.length;i++){
        console.log(listaLenguajesProgramacion[i]);

    }
    
  
    
}


function listaInversa(lista) {
    for(let i = listaLenguajesProgramacion.length; i>=0;i--){
        console.log(listaLenguajesProgramacion[i]);
    }
}
*/
//en vez de usar el metodo reverse() que es desctructivo sobre la lista que se aplique
//ya que una vez usado reverse() la lista original desaparace(las propiedades de la lista original)
//usamos dos for uno ascendente y el otro descendente para mostrar tanto la lista originar como la inversa.
/*
mostrarLista(listaLenguajesProgramacion);
listaInversa(listaLenguajesProgramacion);
let listaNumeros= [7,8,5,6];
let listaNumeros2=[3,2,5,4];
function promedioListaNumeros(lista) {
    let suma = 0;
    let promedio =0;

    for(let i= 0; i<lista.length;i++){
        suma+=lista[i];
        promedio = suma/lista.length;
    } 
    console.log(`la suma es ${suma}, y el promedio es: ${promedio}`);
}

promedioListaNumeros(listaNumeros);

function mayorLista(lista) {
    let mayor= 0;
    for(let i = 0; i<lista.length;i++){
        if(lista[i]>mayor){
            mayor=lista[i];
        }
    }
    console.log(`El elemento mayor de la lista es: ${mayor}`);
    return mayor;
}
function menoLista(lista) {
    let menor = lista[0];
    for(let i = 0; i<lista.length;i++){
      
        if(lista[i]<menor){
            menor=lista[i];
        }
    }
    console.log(`El elemento menor de la lista es: ${menor}`);
    return menor;
}
function mostrarMenorMayorLista(lista) {
    mayorLista(lista);
    menoLista(lista);
    
}
mostrarMenorMayorLista(listaNumeros);
function posicionElemento(lista, elemento) {
    let posicion;
    for(let i= 0; i<lista.length;i++){
        if(elemento===lista[i]){
            posicion=i;
            console.log(`La posicion del elemento ingresado es: ${posicion}`);
            break;
        }else{
            posicion=-1;
            console.log(posicion);
        }
    }
    return posicion;
}
posicionElemento(listaLenguajesProgramacion, 'Python');
function sumaDosLista(lista1, lista2) {
    let listaSuma=[];
    let sumaElmentos=0;
    if(lista1.length===lista2.length){
        for(let i=0; i<lista1.length;i++){
            sumaElmentos=lista1[i]+lista2[i];
            listaSuma.push(sumaElmentos);

        }
        console.log(`La suma de las listas ingresadas es: ${listaSuma}`);

    }else{
        console.log(`el tamaños de las listas no coincide`);
    }
    return listaSuma;
}
sumaDosLista(listaNumeros, listaNumeros2);
function cuadradoLista(lista) {
    let listaCuadrado = [];
    let cuadrado=0;
    for(let i=0;i<lista.length;i++){
        cuadrado= lista[i]*lista[i];
        listaCuadrado.push(cuadrado);

    }
    console.log(`El cuadrado de la lista ingresad es: ${listaCuadrado}`);
    return listaCuadrado;
}
cuadradoLista(listaNumeros2);
*/