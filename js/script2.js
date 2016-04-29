var arr=[''];

for (i=0; i <=2; i++) {
    
    arr[i] = prompt ('Заполните массив имен:', '');     
    
}




var userName = prompt ('Введите имя пользователя:', '');

i=0;

while (i <= arr.length) {
    
    if (userName != arr[i]) {
        
        i++;
        
    } else {
        
        var rez = arr[i];
        i = arr.length + 1;
        
    }
    
}

if (userName == rez) {
    
    alert (rez + ' вы успешно вошли!');
    
} else {
    
    alert ('Вы не правильно ввели имя!');
    
}