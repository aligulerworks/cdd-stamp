const dropdownButton = document.querySelector(".cdd-dropdown-button");
const dropdownOptions = document.querySelector(".cdd-dropdown-options");

dropdownButton.addEventListener("click", function () {
  dropdownOptions.classList.toggle("show-block"); // Toggle visibility using class
});
