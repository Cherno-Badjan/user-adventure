import { scoreGalleons } from '../results/galleons.js';
import { scoreHealth } from '../results/health.js';
import { aliveGalleons, deadGalleons } from '../results/messages.js';
import { clearStorage } from '../utils.js';

const user = JSON.parse(localStorage.getItem('USER'));

const storyDisplay = document.getElementById('story');

const healthResult = scoreHealth(user.health);

const galleonsResult = scoreGalleons(user.galleons);

const healthMessages = {
    dead: 'You are dead',
    frail: 'You are dying',
    healthy: 'Proper Fit'
};

const healthMessage = healthMessages[healthResult];

let galleonsMessages = null;

if (healthResult === 'dead') {
    galleonsMessages = deadGalleons;
}
else {
    galleonsMessages = aliveGalleons;
}

const galleonsMessage = galleonsMessages[galleonsResult];

const story = `Well ${user.name} AKA ${user.character} ${healthMessage}.${galleonsMessage}`;

storyDisplay.textContent = story;

const playAgainButton = document.getElementById('reset-button');
playAgainButton.addEventListener('click', () => {
    clearStorage();
    window.location = '../map'
});