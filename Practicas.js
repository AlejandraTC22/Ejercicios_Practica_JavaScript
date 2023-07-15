//Ejercicio 1
function calculaSiPuedeConducir(num1) 
{
    if (num1 < 0 || num1 > 90 || isNaN(num1)) 
    {
        return "Introduce una edad válida";
    } else if (num1 < 18) 
    {
        return "No puedes conducir, no eres mayor de edad";
    } else if (num1 < 80) 
    {
        return "Puedes conducir";
    }
}

function muestraCalculo1() 
{
    let num1 = parseInt(document.getElementById("num11").value); 
    resultado = calculaSiPuedeConducir(num1); 
    document.getElementById("resultado11").innerHTML = resultado; 
}

//Ejercicio 2
function mostrarCalificacion(num1) 
{
    if (num1 < 0) 
    {
        return "Introduce una nota válida";
    } else if (num1 < 3) 
    {
        return "Muy deficiente";
    } else if (num1 < 5) 
    {
        return "Insuficiente";
    } else if (num1 < 6) 
    {
        return "Suficiente";
    } else if (num1 < 7) 
    {
        return "Bien";
    } else if (num1 < 9) 
    {
        return "Notable";
    } else if (num1 <= 10) 
    {
        return "Sobresaliente";
    } else 
    {
        return "Introduce una nota válida";
    }
}

function muestraCalculo2() 
{
    let num1 = parseInt(document.getElementById("num12").value); 
    resultado = calculaBloque12(num1); 
    document.getElementById("resultado12").innerHTML = resultado; 
}

//Ejercicio 3
var cadena = "";
function calculaCadenasDeTexto3(op1) 
{
    if (cadena.length == 0) 
    {
        cadena = op1;
    } else 
    {
        cadena += "-" + op1;
    }
    document.getElementById("num13").value = "";

    return "Introduce otra palabra";
}

function muestraCalculo3() 
{
    let op1 = document.getElementById("num13").value; 
    resultado = calculaCadenasDeTexto3(op1); 
    document.getElementById("resultado13").innerHTML = resultado; 
}

function cancelar3() 
{
    document.getElementById("num13").value = "";
    document.getElementById("resultado13").innerHTML = "La cadena es: "+cadena; 
    cadena = "";
}

//Ejercicio 4
