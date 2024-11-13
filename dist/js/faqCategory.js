const selects = document.querySelectorAll(".categories");
const abouts = document.querySelectorAll(".faq__details");

// every tab looping
selects.forEach((select) => {
  select.addEventListener("click", () => {
    removeActiveSelect();
    select.classList.add("active");
    const activeAbout = document.querySelector(`#${select.id}-about`); //#$ achu-chu "gets the element"
    removeActiveAbout();
    activeAbout.classList.add("active");
  });
});

function removeActiveSelect() {
  //loopings to remove present active
  selects.forEach((select) => {
    select.classList.remove("active");
  });
}

function removeActiveAbout() {
  abouts.forEach((about) => {
    about.classList.remove("active");
  });
}