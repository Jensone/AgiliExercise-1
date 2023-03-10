/**
 * Rédige ton code JavaScript en dessous
 * et n'oublie pas de lier ta feuille JavaScript avec ta feuille HTML
**/

// Commence par déclarer les variabls necessaires

const sidebarIcon = document.querySelector(".sidebar_menu")
const sidebar = document.querySelector(".sidebar")


// Rédige les conditions ou fonctions juste ici, n'oublie pas le résultat attendu dans le README.md

function openSidebar () {
    sidebar.classList.toggle("active")
}

sidebarIcon.addEventListener("click", openSidebar)
