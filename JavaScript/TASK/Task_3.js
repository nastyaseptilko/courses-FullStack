var login = prompt("Введите логин:");
var password = prompt("Введите пароль:");



switch(true) {
    case login ==="nastya" && password ===123 :

        alert("добро пожаловать nastya");
        break;
    case login ==="ilya" && password ===321  :
        alert("добро пожаловать ilya");
        break;
    case login ==="admin" && password ===1111  :
        alert("Вы можете редактировать сайт.");
        break;

    default:  alert("Ваш пароль и логин не верны");
}
