const form = document.getElementById("orderForm");
let currentStep = 0;
showStep(currentStep);

// Show the current step
function showStep(stepIndex) {
  const steps = document.querySelectorAll(".step");
  steps.forEach(step => step.style.display = "none");
  steps[stepIndex].style.display = "block";
}

// Move to next step
function nextStep() {
  if (validateStep(currentStep)) {
    currentStep++;
    showStep(currentStep);
  }
}

// Validate current step fields
function validateStep(stepIndex) {
  const steps = document.querySelectorAll(".step");
  const inputs = steps[stepIndex].querySelectorAll("input, select");
  for (let input of inputs) {
    if (!input.value) {
      alert("Please complete all fields.");
      return false;
    }
  }
  return true;
}

// Handle final form submit
form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (validateStep(currentStep)) {
    window.location.href = "thanku.html";
  }
});
