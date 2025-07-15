
function showWelcome() {
    alert("Welcome to Awang Mohammad Putra's Portfolio!");
}

function showTime() {
    const timeElement = document.getElementById("time");

    function updateTime() {
        const now = new Date();
        timeElement.textContent = now.toLocaleTimeString();
    }

    updateTime();
    setInterval(updateTime, 1000);
}

function toggleSection(id) {
    const section = document.getElementById(id);
    const header = document.querySelector(`[onclick="toggleSection('${id}')"]`);

    section.classList.toggle('show');
    header.classList.toggle('open');
}

function init() {
    const currentPage = window.location.pathname;
    if (currentPage.endsWith("index.html") || currentPage === "/" || currentPage === "/index") {
        showWelcome();
    }

    showTime();
}
