// Your code here.
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const cubes = document.querySelectorAll('.cube');

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.style.cursor = 'grabbing';
    });

    container.addEventListener('mouseleave', () => {
        isDragging = false;
        container.style.cursor = 'pointer';
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
        container.style.cursor = 'pointer';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        container.scrollLeft = scrollLeft - walk;
    });

    cubes.forEach(cube => {
        cube.addEventListener('mousedown', (e) => {
            e.preventDefault(); // Prevent default text selection
        });
    });
});