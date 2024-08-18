
var arrow = document.getElementById("next-arrow");
var services = document.getElementById("services");
arrow.addEventListener("click", () => {
  window.scrollBy(0, 600);
});

//menu actions

var menubar = document.getElementById("menu-button");
var menubarbar1 = document.getElementById("bar-1-1");
var menubarbar2 = document.getElementById("bar-2-2");
var menubarbar3 = document.getElementById("bar-3-3");
var menulist = document.getElementById("burger-lists");

menubar.addEventListener("click", () => {
  menubarbar1.classList.toggle("changebar-1");
  menubarbar2.classList.toggle("changebar-2");
  menubarbar3.classList.toggle("changebar-3");

  if (menulist.style.visibility == "visible") {
    menulist.style.visibility = "hidden";
  } else {
    menulist.style.visibility = "visible";
  }

  menubar.style.backgroundColor = "transparent";
});

const downloadButton = document.getElementById('contact');
const downloadLink = document.getElementById('downloadLink');

downloadButton.addEventListener('click', () => {
  downloadLink.click();
});


