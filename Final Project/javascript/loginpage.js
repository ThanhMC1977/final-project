const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
// if already logged in, redirect to home page
if (localStorage.getItem("currentUser")) {
    location.href = "./main.html";
  }


  
  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });
  
  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
  
  const loginForm = document.querySelector("#login-form");
  const registerForm = document.querySelector("#register-form");
  
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = registerForm.username.value.trim();
    let email = registerForm.email.value.trim();
    let password = registerForm.password.value;
  
    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;
  
    if (username.length < 6) {
      alert("Lỗi: Tên đăng nhập tối thiểu 6 ký tự");
    } else if (password.length < 8) {
      alert("Lỗi: Mật Khẩu phải có tối thiểu 8 ký tự");
    } else if (!password.match(lowerCaseLetter)) {
      alert("Lỗi: Mật khẩu bắt buộc phải có 1 chữ cái thường");
    } else if (!password.match(upperCaseLetter)) {
      alert("Lỗi: Mật khẩu bắt buộc phải có 1 chữ cái in hoa");
    } else if (!password.match(numbers)) {
      alert("Lỗi: Mật khẩu phải có tối thiểu 1 ký tự số hoặc ký tự đặc biệt");
    } else {
      if (localStorage.getItem("users")) {
        let users = JSON.parse(localStorage.getItem("users"));
  
        users.push({
          email,
          password,
          username,
        });
  
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        localStorage.setItem(
          "users",
          JSON.stringify([
            {
              email,
              password,
              username,
            },
          ])
        );
      }
      container.classList.remove("right-panel-active");
    }
  });
  
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (!localStorage.getItem("users")) {
      alert("No user found");
    } else {
      let users = JSON.parse(localStorage.getItem("users"));
  
      let email = loginForm.email;
      let password = loginForm.password;
  
      let existingUser = users.find(
        (index) =>
          index.email === email.value.trim() &&
          index.password === password.value.trim()
      );
  
      if (existingUser) {
        localStorage.setItem("currentUser", JSON.stringify(existingUser));
  
        location.href = "./main.html";
      } else {
        alert("Email or password is incorrect");
      }
    }
  });



//// authentication / xác minh thông tin người dùng
