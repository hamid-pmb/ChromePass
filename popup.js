// Function to generate a random password
function generatePassword(length = 15) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

// Add event listener to the "Generate Password" button
document.getElementById("generate").addEventListener("click", () => {
    const password = generatePassword();
    document.getElementById("password").value = password;
});

// Add event listener to the "Copy to Clipboard" button
document.getElementById("copy").addEventListener("click", () => {
    const passwordField = document.getElementById("password");
    const password = passwordField.value;

    // Use navigator.clipboard.writeText to copy the text
    navigator.clipboard.writeText(password).then(() => {
        // Show a message indicating the password was copied
        const message = document.getElementById("copyMessage");
        message.textContent = "Password copied to clipboard!";
        message.style.display = "block";

        // Hide the message after 2 seconds
        setTimeout(() => {
            message.style.display = "none";
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy password: ", err);
    });
});