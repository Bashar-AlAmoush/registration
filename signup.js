function saveFormData(event) {
    event.preventDefault();
  
    // Get form data
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    // Validate inputs
    if (/\s/.test(username)) {
      alert("Username must not contain spaces.");
      return;
    }
  
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password) || password.length < 8) {
      alert("Password must be at least 8 characters long and contain at least 1 number, uppercase letter, and special character.");
      return;
    }
  
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (!/^07\d{8}$/.test(phone)) {
      alert("Please enter a valid phone number starting with 07 and 8 number.");
      return;
    }
  
    // Check if username already exists in session storage
    const users = JSON.parse(sessionStorage.getItem("users")) || [];
    if (users.includes(username)) {
      alert("Username already exists. Please choose a different one.");
      return;
    }
  
    // Save form data to session storage
    users.push(username);
    sessionStorage.setItem("users", JSON.stringify(users));
    sessionStorage.setItem(username, JSON.stringify({ password, email, phone }));
  
    alert("Registration successful!");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  
  
  
  