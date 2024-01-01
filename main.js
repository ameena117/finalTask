var logo = document.getElementById('logo');
console.log(logo);

logo.onclick = darkMode;
function darkMode() {
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
}