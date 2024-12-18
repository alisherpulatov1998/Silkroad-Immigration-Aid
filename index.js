const toggleMenu = document.querySelector(".toggleButton");
const offScreenMenu = document.querySelector(".offScreenMenu");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));