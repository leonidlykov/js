let a = Number(prompt('Введите стоимость товара'));
let b = Number(prompt('Введите сумму ваших денег'));

if(a==b){
    alert('Покупка прошла');
}else{
    if(a>b){
        x = a - b;
        alert('Недостаточно средств:' + x + 'p');
    }else{
        y = b - a;
        alert('Покупка прошла. Ваша сдача' + y + 'p');
    }
}

let container = document.querySelector('.header_container');
let logo = document.querySelectorAll('.header_logo');
let nav = document.getElementById('.header_nav');

container.style.background = 'red';
container.style.height = '100px';

let box = '<div class="box"></div>';
let for_box = document.querySelector('.for_box');
for_box.innerHTML = box;
