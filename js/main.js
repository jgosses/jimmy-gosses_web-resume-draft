// find the nav icon
var navIcon = document.getElementById('hamburger-nav-icon');
var navList = document.querySelectorAll('li.toggle-main-nav2');
var navList2 = document.querySelectorAll('toggle-nav-icon');

// if click on nav icon, toggle mobile open nav class and build out nav directions

function openMobileNav() {
    if (navList.length > 0) {               // if the nav contains items    
        for (var i=0; i < navList.length; i++) {
            navList[i].className = 'js-nav-build';      //change this from toggle-nav-icon to toggle-main-nav
        };
        navIcon.innerHTML = "X";
    }
}

// can't seem to get the close X functionality working correctly
function closeMobileNav() {
    if (navIcon.textContent === "X") {
        navList.className = 'li.toggle-main-nav2';
    };
}

navIcon.addEventListener("click", openMobileNav, false);
navIcon.addEventListener("click", closeMobileNav, false);


// i believe the below code is a cleaner way to perform the openMobileNav function, but i'm doing something wrong
/* navIcon.addEventListener("click", e => {
    if (e.target.navList.length > 0) {
        for (var i=0; i < navList.length; i++) {
            navList[i].className = 'js-nav-build';
        }
    }
} */ 

// when click on nav, i want the hamburger icon class to change from 'a.toggle-nav-icon' to 'toggle-main-nav'
// after that, i want the li items that have 'toggle-main-nav' to change to 'js-nav-build'

