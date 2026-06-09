const wrapper = document.querySelector('.categorias-wrapper');
const footer = document.querySelector('.footer');
const productos = document.querySelector('.productos');

window.addEventListener('scroll', () => {
    const footerTop = footer.getBoundingClientRect().top;
    const productosTop = productos.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 700;
    const limiteFooter = isMobile ? windowHeight * 0.5 : windowHeight * 0.2;

    if (footerTop < limiteFooter || productosTop < windowHeight * 0.3) {
        wrapper.style.opacity = '0';
        wrapper.style.pointerEvents = 'none';
    } else {
        wrapper.style.opacity = '1';
        wrapper.style.pointerEvents = 'auto';
    }
});