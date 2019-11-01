const hamburger = document.querySelector(".menuAlternatif");
const menu = document.querySelector("#menuAlternatifOnClick");

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
  // alert("Clicked");
});
