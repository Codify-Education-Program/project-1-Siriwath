const darkMode = document.getElementById("bttn");
const pageBody = document.getElementById("page-body");
const linky = document.getElementById("awesome");

function toggleTheme(){
    pageBody.classList.toggle('dark-theme');
    linky.classList.toggle('dark-theme');
};

darkMode.addEventListener('click', toggleTheme);