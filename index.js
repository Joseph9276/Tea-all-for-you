// Define a helper function to generate a random integer within a specified range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage of the helper function
const minNumber = 1;
const maxNumber = 100;
const randomNumber = getRandomInt(minNumber, maxNumber);
console.log("Random number between", minNumber, "and", maxNumber, ":", randomNumber);
