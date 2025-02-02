// Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
    let sum = 0;
    for (let number of arreglo) {
        sum += number;
    }
    return sum;
}

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
    let mayor = arreglo[0];
    for (let number of arreglo) {
        if (number > mayor) {
            mayor = number;
        }
    }
    return mayor;
}

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
    let pair = [];
    for (let number of arreglo) {
        if (number % 2 === 0) {
            pair.push(number);
        }
    }
    return pair;
}

// Reto 4: Contar Vocales
function contarVocales(texto) {
    let count = 0;
    for (let letter of texto) {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            count += 1;
        }
    }
    return count;
}

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
    let newArray = [];
    for (let i = arreglo.length -1; i >= 0; i -= 1) {
        newArray.push(arreglo[i]);
    }
    return newArray;
}

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
    let sum = 0;
    for (let number of notas) {
        sum += number;
    }
    let average = sum / notas.length;
    return average;
}

// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
    let count = 0;
    for (let letter of texto) {
        if (letter === letra) {
            count += 1;
        }       
    }
    return count;
}

// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
    let newArray = [];
    for (let number of arreglo) {
        if (newArray.indexOf(number) === -1) {
            newArray.push(number);
        }
    }
    return newArray;
}

// Reto 9: Palíndromo
function esPalindromo(texto) {
    // Los estudiantes implementarán esta función
    // Debe retornar true si el texto es un palíndromo, false si no\
    let text = texto.toLowerCase();
    let newText = text.split("").reverse().join("");
    if (text === newText) {
        return true;
    } else {
        return false;
    }
}