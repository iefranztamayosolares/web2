let currentIndex = 0;
let slides = document.querySelectorAll('.carousel-images img');
let indicators = document.querySelectorAll('.indicator');
let autoSlideInterval;

// Función para mostrar la diapositiva actual
function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentIndex);
    });
}

// Funciones para ir a la siguiente y la diapositiva anterior
function nextSlide() {
    showSlide(currentIndex + 1);
    resetAutoSlide();  // Reinicia el temporizador si el usuario interactúa
}

function prevSlide() {
    showSlide(currentIndex - 1);
    resetAutoSlide();
}

// Función para controlar el desplazamiento automático
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000); // Cambia cada 3 segundos
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Función para ir a una diapositiva específica cuando se hace clic en un indicador
function currentSlide(index) {
    showSlide(index);
    resetAutoSlide();
}

// Inicia el desplazamiento automático cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);  // Muestra la primera diapositiva
    startAutoSlide();         // Inicia el desplazamiento automático
});
