// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach(item => item.addEventListener("mouseover", activeLink))

//menu toggle
let toggle = document.querySelector(".toggle")
let navigation = document.querySelector(".navigation")