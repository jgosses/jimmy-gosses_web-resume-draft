// find the nav icon
var navIcon = document.getElementById('hamburger-nav-icon');
var navList = document.querySelectorAll('li.toggle-main-nav2');
var navList2 = document.querySelectorAll('toggle-nav-icon');
var navClose = document.querySelector('hamburger-nav-icon')
var navList3 = document.querySelectorAll('js-nav-build');

// if click on nav icon, toggle mobile open nav class and build out nav directions

navIcon.addEventListener("click", openMobileNav => {
    if (navList.length > 0) {               // if the nav contains items    
        for (var i=0; i < navList.length; i++) {
            navList[i].classList.toggle('js-nav-build');      //change this from toggle-nav-icon to toggle-main-nav
        };
        //navIcon.innerHTML = "X";
    };
})

// close the mobile-view nav
navIcon.addEventListener("click", closeMobileNav => {
    if (navList3.active = true) {
        navIcon.textContent = "X";
    }; //else {

    //}
})


// when click on nav, i want the hamburger icon class to change from 'a.toggle-nav-icon' to 'toggle-main-nav'
// after that, i want the li items that have 'toggle-main-nav' to change to 'js-nav-build'

