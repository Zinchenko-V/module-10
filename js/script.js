var num = prompt ('Введите число:', '');

if (num >= 0 && num - Math.floor(num) == 0) {
    
    var exp = prompt ('Введите степень числа:', '');
    
    if (exp >= 0 && exp - Math.floor(exp) == 0) {
        
        var rez = Math.pow(num, exp);
        console.log ('Число ' + num + ' в степени ' + exp + ' будет: ' + rez);
        
    } else {
        
        alert ('Можно вводить только целые числа >= 0');
        
    }
    
} else {
    
    alert ('Можно вводить только целые числа >= 0');
    
}