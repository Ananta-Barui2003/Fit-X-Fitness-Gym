let menu = document.querySelector('.menu_bar');
let open_btn = document.getElementById('humber_btn');
let close_btn = document.getElementById('close_btn');

function openmenu(){
    menu.style.right = '0';
    open_btn.style.display = 'none';
    close_btn.style.display = 'block';
}

function closemenu(){
    menu.style.right = '-100%';
    open_btn.style.display = 'block';
    close_btn.style.display = 'none';
}