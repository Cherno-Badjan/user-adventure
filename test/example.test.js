// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { scoreHealth } from '../results/health.js';
import { scoreGalleons } from '../results/galleons.js';

const test = QUnit.test;

test('scoreHealth function should take in a health score (25) and return Crucio message', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Crucio! You are in a lot of pain';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = scoreHealth(25);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('scoreHealth function should take in a health score (0) and return Avada Kedavra message', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Avada Kedavra! You are dead!';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = scoreHealth(0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('scoreGalleons function should take in  galleons amount (200) and return Malfoy Rich!', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Malfoy Rich!';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = scoreGalleons(200);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('scoreGalleons function should take in  galleons amount (0) and return Dobby Poor.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Dobby Poor';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = scoreGalleons(0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
