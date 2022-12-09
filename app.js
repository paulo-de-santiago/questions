// traversing the dom
//selection al the buttons
//question-btn

const btns = document.querySelectorAll(".question-btn");

// NOT WORKING:
/* btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const question = event.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
}); */

//using selectors inside the element
