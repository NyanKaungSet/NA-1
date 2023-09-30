function toggle(){
    var toggleNav = document.getElementById('toggle');
    var nav = document.getElementById('navigation');
    toggleNav.classList.toggle('active');
    nav.classList.toggle('active');
}

window.addEventListener('load', () => {
    const age = document.getElementById('age');
    const currentYear = new Date().getFullYear();
    age.innerHTML = currentYear - 2007;
});