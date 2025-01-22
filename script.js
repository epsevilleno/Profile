document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.mt-bannertext, .card-body');

    elements.forEach((element, index) => {
        element.style.opacity = 0; 
        element.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            element.style.opacity = 1;
        }, index * 500); 
    });
});
