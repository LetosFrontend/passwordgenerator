const info = document.querySelector(".info");
const passField = document.getElementById('password');
let password = '';
function generatePassword() {
  let password = '';
  let length = 8;

  let chars =
    'abcdefghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  let n = chars.length;
  for (var i = 0; i < length; ++i) {
    password += chars.charAt(randomInteger(0, n - 1));
  }
  passField.value = password;
}
function copyText() {
  navigator.clipboard.writeText(password);
  info.style.opacity = '1';
  setTimeout(function () {
    info.style.opacity = '0';
  }, 1500);
}
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
