console.log("javaScript connected!");

const form = document.getElementById("voteForm");
const ageInput = document.getElementById("ageInput");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const age = ageInput.value.trim();

  result.className = "result";
  result.style.display = "block";

  if (age === "") {
    result.textContent = "Please enter your age";
    result.classList.add("warning");
  } else if (isNaN(age)) {
    result.textContent = "Please a valid number";
    result.classList.add("warning");
  } else if (Number(age) >= 18) {
    result.textContent = "You can vote";
    zz;
    result.classList.add("success");
  } else {
    result.textContent = "You cannot vote";
    result.classList.add("error");
  }
});
