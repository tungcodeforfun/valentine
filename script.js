const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');
const noScreen = document.getElementById('no-screen');

yesBtn.addEventListener('click', function() {
    questionScreen.classList.add('hidden');
    successScreen.classList.remove('hidden');
});

noBtn.addEventListener('click', function() {
    questionScreen.classList.add('hidden');
    noScreen.classList.remove('hidden');
});

document.getElementById('back-yes').addEventListener('click', function() {
    successScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
});

document.getElementById('back-no').addEventListener('click', function() {
    noScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
});
