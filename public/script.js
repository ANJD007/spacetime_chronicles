const background = document.querySelector('.background');

// Optional: Random extra stars appearing
for (let i = 0; i < 20; i++) {
    const star = document.createElement('div');
    star.classList.add('stars');
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.width = '2px';
    star.style.height = '2px';
    background.appendChild(star);
}

// Image slideshow logic
const images = [
    "assets/image1.jpg",
    "assets/image2.jpg",
    "assets/image3.jpg",
    "assets/image4.jpg",
    "assets/image5.jpg"
];

let currentIndex = 0;
const slideshowImage = document.getElementById('slideshow-image');

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshowImage.style.animation = 'none';
    void slideshowImage.offsetWidth;
    slideshowImage.src = images[currentIndex];
    slideshowImage.style.animation = 'slideFade 1s ease forwards';
}

setInterval(showNextImage, 4000);
document.getElementById('astro-btn').addEventListener('click', () => {
    window.location.href = 'astrobot.html';
});
const facts = [
    "The Sun accounts for 99.86% of the Solar System's mass.",
    "A day on Venus is longer than its year.",
    "Neutron stars can spin 600 times per second.",
    "Olympus Mons on Mars is the tallest volcano.",
    "There are more stars in the universe than grains of sand on Earth.",
    "A spoonful of neutron star weighs billions of tons.",
    "Black holes distort space and time.",
    "Saturn could float in water.",
    "One million Earths fit inside the Sun.",
    "The observable universe is 93 billion light-years wide.",
    "The Milky Way will collide with Andromeda in 4 billion years.",
    "Some exoplanets orbit two stars like Tatooine.",
    "Quasars can outshine entire galaxies."
];

const factBoxLeft = document.getElementById('fact-box-left');
const factBoxRight = document.getElementById('fact-box-right');

let showLeft = true;

function showRandomFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    if (showLeft) {
        factBoxLeft.textContent = randomFact;
        factBoxLeft.style.left = "10px";
        factBoxLeft.style.opacity = "1";

        setTimeout(() => {
            factBoxLeft.style.opacity = "0";
            factBoxLeft.style.left = "-240px";
        }, 12000);
    } else {
        factBoxRight.textContent = randomFact;
        factBoxRight.style.right = "10px";
        factBoxRight.style.opacity = "1";

        setTimeout(() => {
            factBoxRight.style.opacity = "0";
            factBoxRight.style.right = "-240px";
        }, 12000);
    }

    showLeft = !showLeft;
}

setInterval(showRandomFact, 15000);
document.getElementById('date-btn').onclick = () => {
    window.location.href = 'astrocalendar.html';
};
