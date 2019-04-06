// find the nav icon
var navIcon = document.getElementById('hamburger-nav-icon');
var navList = document.querySelectorAll('li.toggle-main-nav2');
var headerHide = document.getElementsByTagName("DIV")[0];
var paraHidden = document.getElementById('dummytext');
var paraHide = document.getElementsByTagName("DIV")[0];


// if click on nav icon, toggle mobile open nav class and build out nav directions

navIcon.addEventListener("click", function (openMobileNav) {
    if (navList.length > 0) {
        for (var i=0; i < navList.length; i++) {
            navList[i].classList.toggle('js-nav-build');
        };
    };
});

// upon nav icon click, hide other header content by changing the id of the div element
navIcon.addEventListener("click", function() {
    if (headerHide.id == "icon-tagline") {
        headerHide.setAttribute("id", "icon-tagline3");
    } else {
        headerHide.setAttribute("id", "icon-tagline");
    }
});


// collapse + expand feature to be used in various places throughout site
var lapse = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < lapse.length; i++) {
    lapse[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        // the hidden JS below is the functionality to totally hide the content
        /* if (content.style.display === "flex") {
            content.style.display = "none";
        } else {
            content.style.display = "flex";
        }; */

        //scroll expand feature
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
        // replace expand with collapse on click and reverse
        if (this.innerText === "expand +") {
            this.innerText = "collapse -";
        } else {
            this.innerText = "expand +";
        }
    })
}
