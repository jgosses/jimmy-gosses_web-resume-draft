// find the nav icon
var navIcon = document.getElementById('hamburger-nav-icon');
var navList = document.querySelectorAll('li.toggle-main-nav2');
var navList2 = document.querySelectorAll('toggle-nav-icon');
var navClose = document.querySelector('hamburger-nav-icon')
var navList3 = document.querySelectorAll('js-nav-build');
var jobTitle = document.getElementById('check');
var jobTitle2 = document.getElementById('check-content');
var jobTitle3 = document.getElementById('job-title-visibility');
var iconClass = document.getElementsByClassName('icon-tagline2');
var jsNavBuild = document.getElementsByClassName('js-nav-build');
var section = document.querySelector('icon-tagline');
var sectionContent = document.createAttribute('icon-tagline2');
var headerHide = document.getElementsByTagName("DIV")[0];
/* var headerHide = document.getElementById('icon-tagline'); */
var headerHide2 = document.getElementById('icon-tagline3');

// if click on nav icon, toggle mobile open nav class and build out nav directions

navIcon.addEventListener("click", function (openMobileNav) {
    if (navList.length > 0) {
        for (var i=0; i < navList.length; i++) {
            navList[i].classList.toggle('js-nav-build');
        };
    };
/*        if (headerHide) {
            headerHide.id = 'icon-tagline3';
        } */
    /* if (iconClass.style.cssText = 'display: inherit') {
        iconClass.style.cssText = "display: none"; */
    });

navIcon.addEventListener("click", function() {
    if (headerHide.id == "icon-tagline") {
        headerHide.setAttribute("id", "icon-tagline3");
    } else {
        headerHide.setAttribute("id", "icon-tagline");
    }
});

    

// close the mobile-view nav



/* jobTitle.addEventListener("click", function (openJobDesc) {
    if (jobTitle.checked = "true") {
        jobTitle2.textContent = "collapse -";
        jobTitle3.style.cssText = "display: block";
    };
}) */

// when click on nav, i want the hamburger icon class to change from 'a.toggle-nav-icon' to 'toggle-main-nav'
// after that, i want the li items that have 'toggle-main-nav' to change to 'js-nav-build'

