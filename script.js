document.getElementById('yesButton').addEventListener('click', function() {
    alert('💖');
});

const noButton = document.getElementById('noButton');
noButton.addEventListener('click', function() {
    moveButtonRandomly();
});

function moveButtonRandomly() {
    const container = document.querySelector('.container');
    const maxX = window.innerWidth - container.offsetWidth;
    const maxY = window.innerHeight - container.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'fixed';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}