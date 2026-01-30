const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');
const noScreen = document.getElementById('no-screen');

let rainContainer = null;

function createRain(imgSrc) {
    if (rainContainer) rainContainer.remove();
    rainContainer = document.createElement('div');
    rainContainer.className = 'rain-container';
    document.body.appendChild(rainContainer);

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = 'falling-cat';
            img.style.left = Math.random() * 100 + 'vw';
            img.style.width = (40 + Math.random() * 40) + 'px';
            img.style.animationDuration = (3 + Math.random() * 3) + 's';
            rainContainer.appendChild(img);
            setTimeout(() => img.remove(), 6000);
        }, i * 200);
    }
}

yesBtn.addEventListener('click', function() {
    questionScreen.classList.add('hidden');
    successScreen.classList.remove('hidden');
    createRain('cat.gif');
});

noBtn.addEventListener('click', function() {
    questionScreen.classList.add('hidden');
    noScreen.classList.remove('hidden');
    createRain('rain-sad.gif');
});

document.getElementById('back-yes').addEventListener('click', function() {
    successScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    if (rainContainer) rainContainer.remove();
});

document.getElementById('back-no').addEventListener('click', function() {
    noScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    if (rainContainer) rainContainer.remove();
});
