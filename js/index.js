//Information
let Menu = document.querySelector('.menu');

document.getElementById('burger-menu').addEventListener('mouseenter', () =>{
    if(Menu.classList.contains('disp') == true)
    {
        Menu.classList.remove('disp');
    }
    else
    {
        Menu.classList.add('disp');
    }
});

document.getElementById('burger-menu').addEventListener('mouseleave', () =>{
    if(Menu.classList.contains('disp') == true)
    {
        Menu.classList.remove('disp');
    }
    else
    {
        Menu.classList.add('disp');
    }
});


//Calculator

function insert(num){
    document.form.textview.value += num;
}

function Reset(){
  document.form.textview.value = '';
}

function Back(){
    let all = document.form.textview.value;
    document.form.textview.value = all.substring(0,all.length-1);
}

function Equal(){
    let all = document.form.textview.value;
    if(all){
        document.form.textview.value = eval(all);
    }
}