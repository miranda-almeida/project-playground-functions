// Desafio 11
function generatePhoneNumber(array) {
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
  if (array.length < 11 || array.length > 11) {
  return 'Array com tamanho incorreto.';
  }
  for (let repeticoes = index + 1; index < array.length; index += 1) {
    array[index] === array[repeticoes];
    counter ++;
  } 
  if (array[index] < 0 || array[index] > 9 || counter >= 3) {
  return 'não é possível gerar um número de telefone com esses valores';
  } else {
  let rearange = '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  return rearange;
  }
}
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) 
    || (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC))
    || (lineC < lineB + lineA && lineC > Math.abs(lineB + lineA))
  ) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  let stringNumbers = string.match(/\d/g); // utiliza RegExp para encontrar encontrar os números dentro da string. \d é o Metacharacter que encontra dígitos de 0 a 9 e /g faz uma busca global (em todos os elementos) do que apenas o primeiro (que é o default ao não utilizarmos /g). 
  let numbers = stringNumbers.map(Number); // utiliza o método .map() com a função Number para retornar o array com os números como tipo number, visto que após o .match() os números retornam como tipo string dentro do array.
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index]
  }
  let oneWater = ' copo de água';
  let plusWater = ' copos de água';
  if (sum > 1) {
  return sum + plusWater;
  } else {
  return sum + oneWater;
  }
}



module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
