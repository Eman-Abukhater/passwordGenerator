const passwordBox = document.getElementById('password');
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const specialCharacters = "!@#$%^&*()_+{}[]|:;<>,.?/~`"

const allchars = upperCase + lowerCase + numbers + specialCharacters;

// Function to generate a random password
function generatePassword() {
    let password = '';

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    // Fill the rest of the password with random characters from all categories
    while (lenght > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordBox.value = password;


}
