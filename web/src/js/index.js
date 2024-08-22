// menu burger
const menuBurger = document.querySelector('.burger-icon');
const header = document.querySelector(".header");

menuBurger.addEventListener("click", () => {
    header.classList.toggle("menu-active");
})

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

window.addEventListener("scroll", ()=>{
    if (window.scrollY>50)
    {
        header.classList.add("header-white");
    }
    else {
        header.classList.remove("header-white");
    }
})

//progress 

document.addEventListener("DOMContentLoaded", function() {
    const progressElements = document.querySelectorAll('.progress');
    
    progressElements.forEach(progress => {
        const progressText = progress.querySelector('.progress-text');
        const progressCircle = progress.querySelector('.progress-circle-prog');
        
        const percentage = parseInt(progressText.getAttribute('data-progress'));
        const circleCircumference = 2 * Math.PI * 74; // 2 * π * radius
        
        const dashArrayValue = (percentage / 100) * circleCircumference;
        
        progressCircle.style.strokeDasharray = `${dashArrayValue} ${circleCircumference}`;
    });
});
