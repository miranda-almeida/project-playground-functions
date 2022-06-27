// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if (booleanOne === true && booleanTwo === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(' ');
  return split;
}

// Desafio 4
function concatName(array) {
  let firstElement = array[0];
  let lastElement = array[array.length - 1];
  let concatenate = lastElement + ', ' + firstElement;
  return concatenate;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winsPoints + tiesPoints;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max.apply(null, array);
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catOneDistance = Math.abs(mouse - cat1); // utilização do Math.abs() para retornar o valor absoluto no caso da posição ser negativa
  let catTwoDistance = Math.abs(mouse - cat2); // dessa forma, a posição dos valores de posições -x, x na subtração não influenciam o resultado

  if (catOneDistance < catTwoDistance) {
    return 'cat1';
  } else if (catTwoDistance < catOneDistance) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let substituir = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      substituir.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      substituir.push('fizz');
    } else if (array[index] % 5 === 0) {
      substituir.push('buzz');
    } else {
      substituir.push('bug!');
    }
  }
  return substituir;
}

// Desafio 9
function encode(string) {
  let vogals = ['a','e','i','o','u'];
  let numberLetter = ['1','2','3','4','5'];
  let newString = '';

  for (index = 0; index < string.length; index += 1){
    if (string[index] === vogals[0]) {
        newString += numberLetter[0];
    } else if (string[index] === vogals[1]) {
        newString += numberLetter[1];
    } else if (string[index] === vogals[2]) {
        newString += numberLetter[2];
    } else if (string[index] === vogals[3]) {
        newString += numberLetter[3];
    } else if (string[index] === vogals[4]) {
        newString += numberLetter[4];
    } else {
        newString += string[index];
    }
  }
  return newString;
}

function decode(string) {
  let vogals = ['a','e','i','o','u'];
  let numberLetter = ['1','2','3','4','5'];
  let newString = '';

  for (index = 0; index < string.length; index += 1){
    if (string[index] === numberLetter[0]) {
        newString += vogals[0];
    } else if (string[index] === numberLetter[1]) {
        newString += vogals[1];
    } else if (string[index] === numberLetter[2]) {
        newString += vogals[2];
    } else if (string[index] === numberLetter[3]) {
        newString += vogals[3];
    } else if (string[index] === numberLetter[4]) {
        newString += vogals[4];
    } else {
        newString += string[index];
    }
  }
  return newString;
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
