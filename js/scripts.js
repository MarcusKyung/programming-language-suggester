function decisionTree(event) {
  event.preventDefault();
  const q1 = document.querySelector("input#q1").value;
  const q2 = document.querySelector("input#q2").value;
  const q3 = document.querySelector("input#q3").value;
  const q4 = document.querySelector("input#q4").value;
  const q5 = document.querySelector("input#q5").value;

  let result;
  if (q1 === "false") {
    result = "Swift";
  } else if (q1 === "true" && q2 === "false" && q3 === "false") {
    result = "PHP";
  } else if (q1 === "true" && q2 === "true" && q4 === "true") {
    result = "JavaScript";
  } else if (q1 === "true" && q2 === "false" && q3 === "true" && q5 === "false") {
    result = "Ruby";
  } else if (q1 === "true" && q2 === "false" && q3 === "true" && q5 === "true") {
    result = "Rust";
  } 

  document.getElementById("language-selection").innerText = result;
}

  window.addEventListener("load", function () {
    const form = document.getElementById("#languagePicker");
    form.addEventListener("submit", decisionTree)
  });