// tabs 
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const tabId = btn.dataset.tab;

        tabButtons.forEach(button => {
            button.classList.toggle("active", button === btn)
        })

    tabContents.forEach(content => {
        content.classList.toggle('active', content.id === tabId);
    })
    })
})

//header

const header = document.querySelector(".header");
window.addEventListener("scroll", ()=>{
    if (window.scrollY>50)
    {
        header.classList.add("header-white");
    }
    else {
        header.classList.remove("header-white");
    }
})