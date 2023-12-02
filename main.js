import './style.css'



/*document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section, index) => {
      section.setAttribute("data-index", index + 1);
  });

  window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const sectionIndex = section.getAttribute("data-index");

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              // Highlight the current section in the navigation, if needed.
              console.log(`Scrolled to Section ${sectionIndex}`);
          }
      });
  });
});


/*const myMenu = ["Hem", "Om mig", "Mina projekt", "Kontakt"];
const nav = document.getElementById("nav-bar");
const ulElement = document.createElement("ul");
ulElement.id = "menu";

for (let i = 0; i < myMenu.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = myMenu[i];
    

    li.addEventListener("click" , function () {
        console.log("Du klickade på: " + myMenu[i]);
    });
    
    nav.appendChild(ulElement);
    ulElement.appendChild(li);
} */

