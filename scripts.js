document.getElementById('yes').addEventListener('click', function() {
    alert('¡Sabía que dirías que sí! 💖');
});

document.getElementById('no').addEventListener('mouseover', function() {
    const noButton = document.getElementById('no');
    noButton.style.position = 'absolute';
    noButton.style.top = Math.random() * window.innerHeight + 'px';
    noButton.style.left = Math.random() * window.innerWidth + 'px';
});