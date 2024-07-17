document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', () => {
        let currentSize = parseInt(window.getComputedStyle(heart).fontSize);
        heart.style.fontSize = (currentSize + 2) + 'px';
    });
});
