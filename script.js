document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("menu-btn").addEventListener("click", function() {
    this.classList.toggle("active"); document.getElementById("menu").classList.toggle("active"); document.getElementById("mask").classList.toggle("active");
  })
});
