// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { scoreHealth } from '../results/health.js';
import { scoreGalleons } from '../results/galleons.js';
import { setUser } from '../utils.js';

const test = QUnit.test;

test('scoreHealth function should take in a health score (25) and return frail', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'frail';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = scoreHealth(25);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('scoreHealth function should take in a health score (0) and return dead', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'dead';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = scoreHealth(0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('scoreGalleons function should take in  galleons amount (200) and return rich', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rich';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = scoreGalleons(200);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('scoreGalleons function should take in  galleons amount (0) and return poor.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'poor';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = scoreGalleons(0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('setUser should take user data and save it to local storage', (expect) => {
    const form = new FormData();
    form.append('name', 'Cherno');
    form.append('character', 'Harry Potter');
    setUser(form);

    const actual = localStorage.getItem('USER');
    const trueActual = JSON.parse(actual);

    const expected = {
        name: 'Cherno',
        character: 'Harry Potter',
        health: 120,
        galleons: 20,
        completed: {},
    };

    expect.deepEqual(trueActual, expected);
});
