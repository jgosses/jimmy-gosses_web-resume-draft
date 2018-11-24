// find the nav icon
var navIcon = document.getElementById('hamburger-nav-icon');
var navList = document.querySelectorAll('li.toggle-main-nav2');
var navList2 = document.querySelectorAll('toggle-nav-icon');

// if click on nav icon, toggle mobile open nav class and build out nav directions

function openMobileNav() {
    if (navList.length > 0) {               // if the nav contains items    
        for (var i=0; i < navList.length; i++) {
            navList[i].className = 'js-nav-build';      //change this from toggle-nav-icon to toggle-main-nav
        }
    }
}
navIcon.addEventListener("click", openMobileNav, false);

    /* if (navList2.length > 0) {
                navList2[0].className = 'ignore-nav-icon';
            }               I can't get this one right. goal is to make hamburger icon to disappear */ 

// when click on nav, i want the hamburger icon class to change from 'a.toggle-nav-icon' to 'toggle-main-nav'
// after that, i want the li items that have 'toggle-main-nav' to change to 'js-nav-build'

/* function openMobileNav() {
    //navList2.className = 'toggle-main-nav';
    navList.className = 'js-nav-build';
} 

navIcon.addEventListener("click", openMobileNav, false); */
