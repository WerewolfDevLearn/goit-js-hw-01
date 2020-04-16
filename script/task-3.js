const ADMIN_PASSWORD = 'jqueryismyjam';
let massage = prompt('Введите пароль:');
if (massage === null) {
  massage = 'Отменено пользователем!';
  alert(massage);
} else if (massage === ADMIN_PASSWORD) {
  massage = 'Добро пожаловать!';
  alert(massage);
} else {
  massage = 'Доступ запрещен, неверный пароль!';
  alert(massage);
}
