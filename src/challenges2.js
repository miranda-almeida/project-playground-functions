// Desafio 11
function generatePhoneNumber() {

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
    sum += numbers[index];
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
