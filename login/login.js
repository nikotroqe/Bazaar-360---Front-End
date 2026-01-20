document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validim demo, thjesht për shembull
  if(email === "" || password === "") {
    alert("Please fill in all fields!");
    return;
  }

  // Për demo: shfaq alert
  alert(`Welcome back, ${email}!`);
  this.reset();
});
