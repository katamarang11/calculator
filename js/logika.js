const operatorsNum = document.querySelectorAll('.operators-num');
const number = document.querySelectorAll('.number-dimensions');
const calculatorScreen = document.querySelector('.calculator-screen');
const sumWithdrawal = document.getElementById('sum-withdrawal');
const clear = document.getElementById('clear');
const deleteLast = document.getElementById('delete-last');
let buffer = 0;
let firstNumber = 0;
let secondNumber = 0;
let operators = '';
let total = 0;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
    if (buffer === 0) {
      buffer = Number(number[i].value);
      calculatorScreen.innerText = buffer;
      if (buffer === 0) {
        buffer = 0;
      };
    } else {
      buffer += number[i].value + '';
      calculatorScreen.innerText = buffer;
    }
  });
}

clear.addEventListener('click', function () {
  calculatorScreen.innerText = 0;
  buffer = 0;
});

deleteLast.addEventListener('click', function () {
  if (buffer.length > 1) {
    buffer = buffer.slice(0, -1);
    calculatorScreen.innerText = buffer;
  } else if (buffer.length === 1 && buffer != 0) {
    buffer = 0;
    calculatorScreen.innerText = buffer;
  }
});

for (let i = 0; i < operatorsNum.length; i++) {
  operatorsNum[i].addEventListener('click', function () {
    console.log(buffer);
    if (buffer != 0) {
      operators = operatorsNum[i].value;
      buffer = buffer.slice(0, -1);
      firstNumber = Number(buffer);
      calculatorScreen.innerText = 0;
      buffer = 0;
    } else {
      buffer = 0;
      calculatorScreen.innerText = 0;
    }

    // operators = operatorsNum[i].value;
    // buffer = buffer.slice(0, -1);
    // firstNumber = Number(buffer);
    // calculatorScreen.innerText = 0;
    // buffer = 0;
  });
}

sumWithdrawal.addEventListener('click', function () {
  secondNumber = Number(buffer);
  calculatorScreen.innerText = 0;
  buffer = 0;

  switch (operators) {
    case '/':
      total = firstNumber / secondNumber;
      break;

    case '*':
      total = firstNumber * secondNumber;
      break;

    case '-':
      total = firstNumber - secondNumber;
      break;

    case '+':
      total = firstNumber + secondNumber;
      break;
  }

  calculatorScreen.innerText = total;
  buffer = 0;
  firstNumber = 0;
  secondNumber = 0;
  operators = '';
  total = '';
});
