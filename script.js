document.getElementById('yesButton').addEventListener('click', function() {
    alert('YAYYY!!!💖\nThank you for being an amazing friend and taking care of me. When I was bored, hungry, or lost, my first instinct was to find you. \nYou\'ve been my home.');
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