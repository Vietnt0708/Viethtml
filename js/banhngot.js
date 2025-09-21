const container = document.querySelector('.container');
const registerBtn = document.querySelector('.Signup-btn');
const loginBtn = document.querySelector('.Login-btn');

registerBtn.addEventListener('click',()=>{
    container.classList.add('active');
})

loginBtn.addEventListener('click',()=>{
    container.classList.remove('active');
})
// Xử lý Signup
const signupForm = document.querySelector('.form-box.Signup form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = signupForm.querySelectorAll("input");
  const username = inputs[0].value;
  const email = inputs[1].value;
  const password = inputs[2].value;
  const dob = inputs[3] ? inputs[3].value : "";
  const phone = inputs[4] ? inputs[4].value : "";
  const address = inputs[5] ? inputs[5].value : "";

  // Lưu vào localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("dob", dob);
  localStorage.setItem("phone", phone);
  localStorage.setItem("address", address);

  // Chuyển sang profile
  window.location.href = "profile.html";
});

// Xử lý Login
const loginForm = document.querySelector('.form-box.Login form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
});

