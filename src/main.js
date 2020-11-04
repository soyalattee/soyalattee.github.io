const xBtn = document.querySelector(".x-btn");
const workDetail = document.querySelector(".work__detail");
const work = document.querySelector(".work");

work.addEventListener("click", (e) => {
  e.target.scrollIntoView();
  console.log("scrolled", e.target);
});
xBtn.addEventListener("click", () => {
  workDetail.classList.toggle("active");
});
