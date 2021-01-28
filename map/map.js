import questData from '../data.js';
//import { getUserData } from '../localStorageUtils.js';
const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('USER'));

let completedAllQuests = true;

for (let quest of questData) {

    if (!user.completed[quest.id]) {
        completedAllQuests = false;
    }
}

if (user.health <= 0 || completedAllQuests) {
    window.location = '../results';
}

for (let quest of questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');


    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;
    li.style.left = quest.map.left;
    li.style.top = quest.map.top;
    li.style.right = quest.map.right;
    li.style.bottom = quest.map.bottom;

    li.append(a);
    ul.append(li);
}