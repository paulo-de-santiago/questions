//using selectors inside the element
//selection al the buttons
//question-btn

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  //console.log(question);
  const btn = question.querySelector(".question-btn");
  //  console.log(btn);

  // add eventListener to button so question will toggle

  btn?.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});

// NOT WORKING:
// traversing the dom

/*
const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const question = event.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
}); */
