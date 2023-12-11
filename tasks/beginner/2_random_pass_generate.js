function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=±§";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
}

const args = process.argv.slice(2);
const passwordLength = parseInt(args[0], 10);

if (isNaN(passwordLength) || passwordLength <= 0) {
    console.log("Пожалуйста, укажите корректную длину пароля.");
} else {

    const generatedPassword = generateRandomPassword(passwordLength);
    console.log(`Ваш пароль: ${generatedPassword}`);
}