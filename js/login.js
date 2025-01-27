document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm")
    const createAccountForm = document.getElementById("createAccountForm")
    const accountInfo = document.getElementById("accountInfo")
    const showCreateAccountLink = document.getElementById("showCreateAccount")
    const showLoginLink = document.getElementById("showLogin")
    const logoutBtn = document.getElementById("logoutBtn")
    const accountBtn = document.getElementById("accountBtn")
    const userName = document.getElementById("userName")
  
    function showLoginForm() {
      loginForm.style.display = "block"
      createAccountForm.style.display = "none"
      accountInfo.style.display = "none"
    }
  
    function showCreateAccountForm() {
      loginForm.style.display = "none"
      createAccountForm.style.display = "block"
      accountInfo.style.display = "none"
    }
  
    function showAccountInfo(name) {
      loginForm.style.display = "none"
      createAccountForm.style.display = "none"
      accountInfo.style.display = "block"
      userName.textContent = name
      accountBtn.textContent = "My Account"
    }
  
    function handleLogin(event) {
      event.preventDefault()
      const email = document.getElementById("login-email").value
      const password = document.getElementById("login-password").value
  
      // Here you would typically send a request to your server to authenticate the user
      // For this example, we'll just simulate a successful login
      console.log("Login attempt:", { email, password })
  
      // Simulating successful login
      localStorage.setItem("user", JSON.stringify({ name: "John Doe", email: email }))
      showAccountInfo("John Doe")
    }
  
    function handleCreateAccount(event) {
      event.preventDefault()
      const name = document.getElementById("create-name").value
      const email = document.getElementById("create-email").value
      const password = document.getElementById("create-password").value
      const confirmPassword = document.getElementById("create-confirm-password").value
  
      if (password !== confirmPassword) {
        alert("Passwords do not match")
        return
      }
  
      // Here you would typically send a request to your server to create the account
      // For this example, we'll just simulate a successful account creation
      console.log("Create account attempt:", { name, email, password })
  
      // Simulating successful account creation and login
      localStorage.setItem("user", JSON.stringify({ name: name, email: email }))
      showAccountInfo(name)
    }
  
    function handleLogout() {
      localStorage.removeItem("user")
      showLoginForm()
      accountBtn.textContent = "Login"
    }
  
    document.getElementById("login-form").addEventListener("submit", handleLogin)
    document.getElementById("create-account-form").addEventListener("submit", handleCreateAccount)
    showCreateAccountLink.addEventListener("click", showCreateAccountForm)
    showLoginLink.addEventListener("click", showLoginForm)
    logoutBtn.addEventListener("click", handleLogout)
  
    // Check if user is already logged in
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      showAccountInfo(user.name)
    } else {
      showLoginForm()
    }
  
    // Update account button text based on login status
    accountBtn.textContent = user ? "My Account" : "Login"
  })
  
  