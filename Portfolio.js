//CHANGE NAV COLOR AFTER CLICK ON 
const links = document.querySelectorAll("li a")
links.forEach((link) => {
    link.addEventListener("click", (event) => {
        links.forEach((link) => {
            link.classList.remove("active")
        })
        event.target.classList.add("active")
    })
})



//SKILLS DATA-PROGRESS ANIMATION
let our_skills = document.querySelector(".skills-container");
window.onscroll = function() {
    let skills_offset_top = our_skills.offsetTop;
    let skills_offset_height = our_skills.offsetHeight;
    let window_height = this.innerHeight;
    let window_scroll_top = this.pageYOffset;
    if (window_scroll_top > (skills_offset_top + skills_offset_height - window_height)) {
        let all_skills = document.querySelectorAll(".skills-box .skill-progress span");
        all_skills.forEach((skill) => {
            skill.style.width = skill.dataset.progress;
        });
    }
}




