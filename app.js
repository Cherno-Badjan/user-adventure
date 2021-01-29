// import functions and grab DOM elements
import { setUser } from './utils.js';
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    setUser(formData);

    // const user = {
    //     name: formData.get('name'),
    //     character: formData.get('character'),
    //     health: 120,
    //     galleons: 20,
    //     completed: {},
    // };

    // const stringyUser = JSON.stringify(user);
    // localStorage.setItem('USER', stringyUser);

    window.location = './map';
});

