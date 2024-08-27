const toggleTheme = document.getElementById("toggleTheme");
const rootHTML = document.documentElement;

function changeTheme() {
    const currentTheme = rootHTML.getAttribute("data-theme");

    if (currentTheme === 'dark') rootHTML.setAttribute("data-theme", "light")
        else rootHTML.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-brightness-high");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionActive = accordionItem.classList.contains("active");
  
      accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
  })
  
  menuLinks.forEach(item => {
    item.addEventListener("click", () => {
      menuLinks.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    })
  })