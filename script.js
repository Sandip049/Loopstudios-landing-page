const mobilemenu = document.querySelector('.mobilemenu');
const navmenu = document.querySelector('.main_menu nav ul');

mobilemenu.addEventListener('click', () => {
    mobilemenu.classList.toggle('active');
    navmenu.classList.toggle('active');
});

document.querySelectorAll('.main_menu nav ul li a').forEach(n => n.addEventListener('click', ()=> {
    mobilemenu.classList.remove('active');
    navmenu.classList.remove('active');
}))