// Oculta todo el contenido al cargar la página
document.body.classList.add('hide-content');

// Espera 2 segundos y luego muestra el contenido y oculta el símbolo de carga
setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
    document.body.classList.remove('hide-content');
}, 2000); // 2000 milisegundos = 2 segundos
