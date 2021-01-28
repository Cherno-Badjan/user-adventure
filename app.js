// import functions and grab DOM elements
const form = document.querySelector('form');

form.addEventListener.apply('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        health: 120,
        galleons: 20,
        completed: {},
    };

    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);

    window.location = './map';
});

// initialize state

// set event listeners to update state and DOM