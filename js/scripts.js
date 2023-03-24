function decisionTree(event) {
  event.preventDefault();
  const question1 = document.querySelector("input[name='q1']:checked").value;
  const question2 = document.querySelector("input[name='q2']:checked").value;
  const question3 = document.querySelector("input[name='q3']:checked").value;
  const question4 = document.querySelector("input[name='q4']:checked").value;
  const question5 = document.querySelector("input[name='q5']:checked").value;

  let resultName;
  let resultDescription;
  if ((question1 === "true")) {
    resultName = "Swift"
    resultDescription = "Swift. Based on your desire to work with Swift is a high-level general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community for use with iOS, macOS, watchOS, and tvOS.";
  } else if ((question1 === "false" && question2 === "true"))  {
    resultName = "COBOL"
    resultDescription = "COBOL. COBOL is a compiled English-like computer programming language designed for business use. It is an imperative, procedural and, since 2002, object-oriented language. COBOL is primarily used in business, finance, and administrative systems for companies and governments.";
  } else if ((question1 === "false" && question2 === "false" && question3 === "true")) {
    resultName = "JavaScript"
    resultDescription = "JavaScript. JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.";
  } else if ((question1 === "false" && question2 === "false" && question3 === "false" && question4 === "true")) {
    resultName = "Python"
    resultDescription = "Python. Python is a high-level, general-purpose programming language. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.";
  } else if ((question1 === "false" && question2 === "false" && question3 === "false" && question4 === "false" && question5 === "true")) {
    resultName = "Java"
    resultDescription = "Java. Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.";
  } else if ((question1 === "false" && question2 === "false" && question3 === "false" && question4 === "false" && question5 === "false")) {
    resultName = "Ruby"
    resultDescription = "Ruby. Ruby is a interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity.";
  } else {
    resultName = "JavaScript"
    resultDescription = "JavaScript is a great place to start! JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
  }

  document.getElementById("languageName").innerText = "You Should Learn:" + resultName;
  document.getElementById("languageDescription").innerText = "Based on your results, you should learn: " + resultDescription;
}

  window.addEventListener("load", function () {
    const form = document.getElementById("languagePicker");
    form.addEventListener("submit", decisionTree);
  });