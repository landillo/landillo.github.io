//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(Lado){
    return Lado * 4;
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(Lado){
    return Lado * Lado;
} 

//console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd;

//Codigo del triangulo

console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del triandulo miden: " + ladoTriangulo1 + "cm, "+ ladoTriangulo2 + "cm, "+ baseTriangulo + "cm");
//onst alturaTriangulo = 5.5;
//console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    perimetro = lado1 + lado2 + base;
    return perimetro
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El área del Triangulo es: " + areaTriangulo + "cm2");

function areaTriangulo(base, altura) {
    area= (base * altura) / 2;
    return area;
}
console.groupEnd;

//Codigo Circulos
console.group("Circulos");

function diametroCirculo(radio){
    return radio * 2;
}
const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return  diametro * PI;
}

function areaCirculo(radio) {
    return PI  * (radio * radio);
}
/*const diametroCirculo = 8;
const radioCirculo = diametroCirculo / 2;
console.log("El radio del ciruclo es: " + radioCirculo + "cm");
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

const perimetroCirculo = diametroCirculo * pi;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");


const areaCirculo = pi * (radioCirculo * radioCirculo);
console.log("EL área del circulo es: " + areaCirculo + "cm2");*/

console.groupEnd;

//Aquí empieza la interaccion con HTML

//Calcular el perimetro y el área de un Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro +"cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area +"cm2");
}

//Calcular el perimetro y área de un Triangulo

function calcularPerimetroTriangulo() {
    const primerLado = document.getElementById("InputLado1Triangulo");
    const lado1 =parseFloat(primerLado.value);

    const segundoLado = document.getElementById("InputLado2Triangulo");
    const lado2 = parseFloat(segundoLado.value);
    
    const basePeriTriangulo = document.getElementById("InputBaseTriangulo");
    const base = parseFloat(basePeriTriangulo.value);
    
    const perimetro= perimetroTriangulo(lado1, lado2, base);
     alert("el perimetro del triangulo es: " + perimetro + "cm");   
    
}

function calcularAreaTriangulo () {
    const alturaTriangulo = document.getElementById("InputAlturaTriangulo");
    const altura = parseFloat(alturaTriangulo.value);
    
    const baseAreaTriangulo = document.getElementById("InputBaseTriangulo");
    const base = parseFloat(baseAreaTriangulo.value);

    const area=areaTriangulo(base, altura);
    alert("El área del triangulo es: " + area + "cm2");
}

//Calcular el área y perimetro del Circulo

function  calcularPerimetroCirculo() {
    const radioCirculo = document.getElementById("InputRadioCirculo");
    const radio = parseFloat(radioCirculo.value);

    const perimetro = ((radio *2) * Math.PI);
    alert("el perimetro del circulo es: " + perimetro + "cm");
}

function calcularAreaCirculo() {
    const radioCirculo = document.getElementById("InputRadioCirculo");
    const radio = parseFloat(radioCirculo.value);

    const area = Math.PI * (radio * radio);
    alert("el area del circulo es: " + area + "cm2");
}

// Triangulo Isosceles...

function validarTrianguloIs() {
    const primerLado = document.getElementById("InputLado1TrianguloIs");
    const lado1 =parseFloat(primerLado.value);

    const segundoLado = document.getElementById("InputLado2TrianguloIs");
    const lado2 = parseFloat(segundoLado.value);
    
    const baseTrianguloIs = document.getElementById("InputBaseTrianguloIs");
    const base = parseFloat(baseTrianguloIs.value);

    if (lado1 == lado2 && ((lado1 + lado2) >= base)) {
        alert("Tu triangulo es Isosceles, podemos calcular su altura!");
        document.getElementById("calcularAltura").disabled= false;
    }
    else {
        alert("Lo siento, no son medidas para un triangulo.")
    }
}
function calcularAlturaTrianguloIs() {
    const primerLado = document.getElementById("InputLado1TrianguloIs");
    const lado1 =parseFloat(primerLado.value);

    const segundoLado = document.getElementById("InputLado2TrianguloIs");
    const lado2 = parseFloat(segundoLado.value);
    
    const baseTrianguloIs = document.getElementById("InputBaseTrianguloIs");
    const base = parseFloat(baseTrianguloIs.value);

    const h = (Math.sqrt((lado1 * lado1)-((base * base)/4)));
    
    document.getElementById("calcularAltura").disabled= true;

    alert("la altura del triangulo es: " + h  + "cm");
}