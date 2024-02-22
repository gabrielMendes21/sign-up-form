// Check if passwords are equal
document.querySelector("#confirm-password").addEventListener("input", () => {
    const password = document.querySelector("#password").value
    const confirmPassword = document.querySelector("#confirm-password").value
    
    if (password != confirmPassword) {
        document.querySelector(".error").textContent = "* Passwords do not match"
    } else {
        document.querySelector(".error").textContent = ""
    }
})