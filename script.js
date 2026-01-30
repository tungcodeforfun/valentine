const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');
const noScreen = document.getElementById('no-screen');

let rainContainer = null;

function createRain() {
    if (rainContainer) rainContainer.remove();
    rainContainer = document.createElement('div');
    rainContainer.className = 'rain-container';
    document.body.appendChild(rainContainer);

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const cat = document.createElement('img');
            cat.src = 'cat.gif';
            cat.className = 'falling-cat';
            cat.style.left = Math.random() * 100 + 'vw';
            cat.style.width = (40 + Math.random() * 40) + 'px';
            cat.style.animationDuration = (3 + Math.random() * 3) + 's';
            rainContainer.appendChild(cat);
            setTimeout(() => cat.remove(), 6000);
        }, i * 200);
    }
}

yesBtn.addEventListener('click', function() {
    questionScreen.classList.add('hidden');
    successScreen.classList.remove('hidden');
    createRain();
});

noBtn.addEventListener('click', function() {
    questionScreen.classList.add('hidden');
    noScreen.classList.remove('hidden');
});

document.getElementById('back-yes').addEventListener('click', function() {
    successScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    if (rainContainer) rainContainer.remove();
});

document.getElementById('back-no').addEventListener('click', function() {
    noScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
});
