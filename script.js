// Seleccionar todas las pestañas y contenidos
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

// Recorrer cada pestaña
tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        // Quitar clase active de todas las pestañas
        tabs.forEach(t => t.classList.remove('active'));

        // Ocultar todos los contenidos
        contents.forEach(c => c.classList.remove('active'));

        // Activar la pestaña seleccionada
        tab.classList.add('active');

        // Mostrar el contenido correspondiente
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});
