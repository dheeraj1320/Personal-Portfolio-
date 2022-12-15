"strict mode";

// Variables
const submitBtn = document.querySelector(".submitBtn");

// Functions
const submitHandler = () => {
  console.log("djdjdjdjjd");
};

// Event Handlers
submitBtn.addEventListener("click", submitHandler);

// Slider

$(".carousel").carousel({
  interval: 3000,
  keyboard: true,
  pause: "hover",
  wrap: true,
});
