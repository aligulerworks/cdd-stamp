const dropdownButton = document.querySelector(".cdd-dropdown-button");
const dropdownOptions = document.querySelector(".cdd-dropdown-options");

const chartOptions = document.querySelector(".cdd-chart-options");
const chartOptionsButton = document.querySelector(".cdd-chartoptions-button");

dropdownButton.addEventListener("click", function () {
  dropdownOptions.classList.toggle("show-block");
});

chartOptionsButton.addEventListener("click", function () {
  chartOptions.classList.toggle("show-block");
});
