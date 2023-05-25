// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan navbarNav
const menu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Menghitung Luas Persegi
function hitung_luas() {
  var sisiLuasInput = document.getElementById("sisi-luas");
  var outputLuas1Element = document.getElementById("output-L1");
  var outputLuas2Element = document.getElementById("output-L2");
  var outputLuas3Element = document.getElementById("output-L3");

  var sisiLuas = parseFloat(sisiLuasInput.value);
  if (isNaN(sisiLuas) || sisiLuas <= 0) {
    outputLuas3Element.textContent = "Sisi harus diisi dengan nilai positif";
    return;
  }

  var area = sisiLuas * sisiLuas;
  outputLuas1Element.textContent = "L = S * S ";
  outputLuas2Element.textContent = "L = " + sisiLuas + "x" + sisiLuas;
  outputLuas3Element.textContent = "L = " + area;

  sisiLuasInput.value = "";
}

// Menghitung Kelilling Persegi
function hitung_keliling() {
  var sisiKelilingInput = document.getElementById("sisi-keliling");
  var outputKeliling1Element = document.getElementById("output-K1");
  var outputKeliling2Element = document.getElementById("output-K2");
  var outputKeliling3Element = document.getElementById("output-K3");

  var sisikeliling = parseFloat(sisiKelilingInput.value);
  if (isNaN(sisikeliling) || sisikeliling <= 0) {
    outputKeliling3Element.textContent =
      "Sisi harus diisi dengan nilai positif";
    return;
  }

  var area = 4 * sisikeliling;
  outputKeliling1Element.textContent = "K = 4 * S ";
  outputKeliling2Element.textContent = "K = " + 4 + "x" + sisikeliling;
  outputKeliling3Element.textContent = "K = " + area;

  sisiKelilingInput.value = "";
}
