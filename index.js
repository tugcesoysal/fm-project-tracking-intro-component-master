const openButton = document.querySelector(".menu-icon");
const closeButton = document.querySelector(".close-icon");
const navBarList = document.querySelector(".navbar-list");

openButton.addEventListener("click", () => {
  navBarList.classList.toggle("active");
  openButton.style.display = "none";
  closeButton.style.display = "block";
});

closeButton.addEventListener("click", () => {
  navBarList.classList.remove("active");
  closeButton.style.display = "none";
  openButton.style.display = "block";
});
