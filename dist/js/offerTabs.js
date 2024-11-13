const tabs = document.querySelectorAll(".offer__img");
const contents = document.querySelectorAll(".offer__details");

// every tab looping
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab(); 
    tab.classList.add("active");
    const activeContent = document.querySelector(`#${tab.id}-content`); //#$ achu-chu "gets the element"
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveTab() { //loopings to remove present active
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
