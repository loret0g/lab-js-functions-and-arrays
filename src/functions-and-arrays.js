// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 < num2) {
        return num2;
    } else if(num1 > num2) {
        return num1;
    } else {
        return num1;
    }
}
console.log(maxOfTwoNumbers(5, 5));


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if(words.length === 0) {    // Clausula de guardia 
        return null;
    }

    let palabraMasLarga = words[0];     // Inicializo la posible palabra más larga en 0

    for(let i = 0; i < words.length; i++) {
        if(words[i].length > palabraMasLarga.length) {
            palabraMasLarga = words[i];
        }
    }
    return palabraMasLarga;
}
console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNum) {
    if(arrNum.length === 0) {    // Clausula de guardia 
        return 0;
    }
    let sumaTotal = 0;

    for(let i = 0; i < arrNum.length; i++) {
        sumaTotal += arrNum[i];
    }
    return sumaTotal;
}
console.log(sumNumbers(numbers));


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if(numbers.length === 0) {
        return 0;
    }

    let totalNumbers = sumNumbers(numbers);
    let arrayElements = numbers.length;
    let average = totalNumbers / arrayElements;

    return average;

}
console.log(averageNumbers(numbers2));


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrWords, word) {
    if(arrWords.length === 0) {
        return null;
    }

    let variableDeControl = false;
    
    for(let i = 0; i < arrWords.length; i++) {
        if(arrWords[i] === word) {
            variableDeControl = true;
        } 
    }
    return variableDeControl;
}

console.log(doesWordExist(words2, "matterd"));
