const modal = document.getElementById("contactModal");
const btn = document.getElementById("openContact");
const span = document.getElementsByClassName("close")[0];

// Abrir modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cerrar modal al clickear la X
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar modal al clickear fuera de la ventana
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
