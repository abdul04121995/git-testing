const pEl = document.querySelector("p");
// pEl.addEventListener("copy", function (e) {
//   console.log(e);
// });

const leftEl = document.querySelector(".left");
leftEl.addEventListener("click", function () {
  leftEl.classList.toggle("active");
});
