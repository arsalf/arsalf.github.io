/* ============= Responsive ==============*/
let nav = document.getElementById("navigasi");
let profile = document.getElementById("profile");
let edu = document.getElementById("edu");
let skill = document.getElementById("skills");
let groupy = document.getElementsByClassName("groupy");
let home_nav = document.getElementById("home_nav");
let profile_nav = document.getElementById("profile_nav");
let skill_nav = document.getElementById("skill_navbar");
console.log(profile.offsetTop);
window.onscroll = function() {
    var distanceScrolled = document.documentElement.scrollTop;
    if (distanceScrolled <= 75) {
        nav.style.backgroundColor = "#212121";
    } else {
        nav.style.backgroundColor = "#212121bb";
    }
    if (distanceScrolled <= profile.offsetTop - 200) {
        home_nav.classList.add("active");
        skill_nav.classList.remove("active");
        profile_nav.classList.remove("active");
    } else if (distanceScrolled <= profile.offsetTop + 200) {
        home_nav.classList.remove("active");
        skill_nav.classList.remove("active");
        profile_nav.classList.add("active");
        for (let i = 0; i < groupy.length; i++) {
            groupy[i].classList.remove("active");
        }
    } else if (distanceScrolled <= edu.offsetTop + 300) {
        profile_nav.classList.remove("active");
        skill_nav.classList.remove("active");
        for (let i = 0; i < groupy.length; i++) {
            groupy[i].classList.add("active");
        }
    } else if (distanceScrolled <= skill.offsetTop) {
        for (let i = 0; i < groupy.length; i++) {
            groupy[i].classList.remove("active");
        }
        home_nav.classList.remove("active");
        skill_nav.classList.add("active");
    }

}

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("org").innerHTML = "Org Experience";
    } else {
        document.getElementById("org").innerHTML = "Organization Experience";
    }
}

/* Add Skill */
var x = window.matchMedia("(max-width: 425px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

let team_skill = document.getElementById("tm-skill");
let comunication_skill = document.getElementById("cm-skill");
let ct_skill = document.getElementById("ct-skill");
let an_skill = document.getElementById("an-skill");
let ld_skill = document.getElementById("lead-skill");
let ki_skill = document.getElementById("ki-skill");
let c_skill = document.getElementById("c-skill");
let cs_skill = document.getElementById("c#-skill");
let java_skill = document.getElementById("java-skill");
let python_skill = document.getElementById("python-skill");
let html_skill = document.getElementById("html-skill");
let css_skill = document.getElementById("css-skill");
let js_skill = document.getElementById("js-skill");
let php_skill = document.getElementById("php-skill");
let bs_skill = document.getElementById("bs-skill");
let unity_skill = document.getElementById("unity-skill");
let office_skill = document.getElementById("office-skill");
let ina_skill = document.getElementById("ina-skill");
let eng_skill = document.getElementById("eng-skill");
fill_skills(team_skill, 4);
fill_skills(comunication_skill, 4);
fill_skills(ct_skill, 3);
fill_skills(an_skill, 2);
fill_skills(ld_skill, 4);
fill_skills(ki_skill, 3);
fill_skills(c_skill, 4);
fill_skills(cs_skill, 2);
fill_skills(java_skill, 3);
fill_skills(python_skill, 3);
fill_skills(html_skill, 4);
fill_skills(css_skill, 3);
fill_skills(js_skill, 4);
fill_skills(php_skill, 3);
fill_skills(bs_skill, 3);
fill_skills(unity_skill, 3);
fill_skills(office_skill, 4);
fill_skills(ina_skill, 4);
fill_skills(eng_skill, 2);

function fill_skills(element, count_skill) {
    for (let i = 0; i < count_skill; i++) {
        element.innerHTML += ` <i class="fas fa-star"></i> `;
    }
    for (let i = count_skill; i < 5; i++) {
        element.innerHTML += ` <i class="far fa-star"></i> `;
    }
}