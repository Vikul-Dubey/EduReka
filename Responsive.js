Burgur = document.querySelector('.burgur');
Navbar = document.querySelector('.navbar')
NavList = document.querySelector('.nav-list')
RighNav = document.querySelector('.right-nav')

Burgur.addEventListener('click', () => {
    NavList.classList.toggle('v_res')
    RighNav.classList.toggle('v_res')
    Navbar.classList.toggle('h_res')
})


document.getElementById('subscribebtn').onclick =function(){
    document.getElementById('subscribebtn').innerHTML = "Subscribed";
}