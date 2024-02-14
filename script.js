document.getElementById('yesButton').addEventListener('click', function() {
    alert('YAYYY!!!💖\nThank you for being an amazing friend and taking care of me. When I was bored, hungry, or lost, my first instinct was to find you. You were my home and made me homeless-core.\n I\'ve been debugging the pet today since 7 pm, which was... fuck 10 hours ago. holy shit. the IOS system is bitching about my code(hence why I like Windows better...), so the pet would have to wait a day or more... my b my b\n It was a shame that things turned bitter... I did a lot of reflecting today and remembered how much great memories we\'ve made together and how amazing you are. I have no idea how our relationship will look like in the future, but nevertheless, I wish you a happy Valentines!! I love you!!(as a friend?) You deserve flowers and chocolates and gifts and kisses more than anyone \n --for my dearest Cindia');
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
