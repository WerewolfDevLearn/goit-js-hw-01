let input;
let cncl;
let total = 0;
do {
  input = prompt('Введите число:');
  cncl = input;
  input = Number(input);
  if (Number.isNaN(input) === true) {
    alert('Вы ввели не число. Попробуйте еще раз');
  } else {
    input = Number(input);
    total += input;
    console.log(total);
  }
} while (cncl !== null);
alert(`Общая сумма чисел равна ${total}`);
