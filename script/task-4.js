let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
let numderOfDrones = prompt('Какое количество дронов Вы хотите перобрести?');
if (numderOfDrones === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = Number(numderOfDrones) * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    alert(
      `Вы купили ${numderOfDrones} дроидов, на счету осталось ${credits} кредитов.`,
    );
  }
} 
else if(numderOfDrones==='0'){
    alert(`Вы ничего не купили, на счету ${credits} кредитов`)
}
