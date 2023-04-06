//jshint esversion:6


/*****************NAVBAR TRANSITION*****************/
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function() {
    const navUl = document.getElementById("nav-ul");
    navUl.classList.toggle("show");
    window.addEventListener("scroll", function() {
        navUl.classList.remove("show");
    });
});


/*****************HOME SECTION**************** */

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const scroll = document.querySelector(".scroll-up-button");
    header.classList.toggle("sticky", window.scrollY > 0);
    scroll.classList.toggle("scroll-visibility", window.scrollY > 0);
});

const title = document.querySelector(".title");

title.addEventListener("mouseover", function() {
    const homeTransition = document.querySelector(".home");
    homeTransition.classList.add("transparency");

});

title.addEventListener("mouseout", function() {
    const homeTransition = document.querySelector(".home");
    homeTransition.classList.remove("transparency");
});

/***************Background image transition****************/

/*******************ABOUT SECTION******************* */

const about = document.querySelector(".about");

about.addEventListener("mouseover", function() {
    about.classList.add("about-animation");
    const title = document.querySelector(".about-dummy");
    title.classList.remove("about-padding");
});

const aboutPara = document.querySelector(".about-para");

aboutPara.addEventListener("mouseover", function() {
    aboutPara.classList.add("about-para-animation");
    /***Interact text***/
    const Interact = document.querySelector(".interact-txt");
    Interact.classList.add("interact-display");
    typewriter();
});


/*****************WORK SECTION*******************/

const work = document.querySelector("#Works");

work.addEventListener("mouseover", function() {
    const workDes = document.querySelector(".work-title-description");
    workDes.classList.add("work-description-animation");
    const work1 = document.querySelector(".work1");
    work1.classList.add("work1-img-animation");
    const work2 = document.querySelector(".work2");
    work2.classList.add("work2-img-animation");
    const work3 = document.querySelector(".work3");
    work3.classList.add("work3-img-animation");
});


/**************************SKILLS SECTION*************************** */

const skillDescription = document.querySelector(".skill-description");

skillDescription.addEventListener("mouseover", function() {
    skillDescription.classList.add("skill-description-animation");
});

const skillSet = document.querySelector(".skill-set");

skillSet.addEventListener("mouseover", function() {
    skillSet.classList.add("skill-set-animation");
});

/**Skill Dim**/

const skillHeading = document.querySelector(".skill-heading");

skillHeading.addEventListener("mouseover", function() {
    const skillTransition = document.querySelector(".skills");
    skillTransition.classList.add("skill-dim");

});

skillHeading.addEventListener("mouseout", function() {
    const skillTransition = document.querySelector(".skills");
    skillTransition.classList.remove("skill-dim");
});

/*************************SERVICES SECTION**************************/

const mediaQuery = window.matchMedia('(min-width: 500px)')
// Check if the media query is true
if (mediaQuery.matches) {
    const services = document.querySelector(".services-title");

    services.addEventListener("mouseover", function() {
        const description = document.querySelector(".services-para");
        const img1 = document.querySelector(".img1");
        const img2 = document.querySelector(".img2");
        const img3 = document.querySelector(".img3");
        description.classList.add("services-animation");
        img1.classList.add("img1-animation");
        img2.classList.add("img2-animation");
        img3.classList.add("img3-animation");
});
    const contact = document.querySelector(".contact-me");

    contact.addEventListener("mouseover", function() {
        const form = document.querySelector(".contact-me-form");
        form.classList.add("form-animation");
        const details = document.querySelector(".contact-us-details");
        details.classList.add("details-animation");
});
}

// const services = document.querySelector(".services-title");

// services.addEventListener("mouseover", function() {
//     const description = document.querySelector(".services-para");
//     const img1 = document.querySelector(".img1");
//     const img2 = document.querySelector(".img2");
//     const img3 = document.querySelector(".img3");
//     description.classList.add("services-animation");
//     img1.classList.add("img1-animation");
//     img2.classList.add("img2-animation");
//     img3.classList.add("img3-animation");
// });



/***************************CONTACT ME**************************** */

// const contact = document.querySelector(".contact-me");

// contact.addEventListener("mouseover", function() {
//     const form = document.querySelector(".contact-me-form");
//     form.classList.add("form-animation");
//     const details = document.querySelector(".contact-us-details");
//     details.classList.add("details-animation");
// });


/*********************FORM**********************/

// const submit = document.querySelector(".message");

// submit.addEventListener("click", function() {
//     const thanks = document.querySelector(".thanks");
//     const input = document.querySelector("input");
//     thanks.classList.remove("thanks-show");
//     setTimeout(function() {
//         thanks.classList.add("thanks-show");
//     }, 1500);
// });

const form = document.querySelector("form");

form.addEventListener("submit", function() {
    const thanks = document.querySelector(".thanks");
    const input = document.querySelector("input");
    thanks.classList.remove("thanks-show");
    setTimeout(function() {
        thanks.classList.add("thanks-show");
    }, 1500);
});

/*******************FOOTER SECTION********************/

const d = new Date();
let year = d.getFullYear();

document.querySelector(".year").innerHTML = year;

/******MEDIA QUERY******/

// const mediaQuery = window.matchMedia('(max-width: 500px)');
// // Check if the media query is true
// if (mediaQuery.matches) {
//   // Then trigger an alert
//   document.querySelector(".services-title").removeEventListener("mouseover", function() {
//     const description = document.querySelector(".services-para");
//     const img1 = document.querySelector(".img1");
//     const img2 = document.querySelector(".img2");
//     const img3 = document.querySelector(".img3");
//     description.classList.add("services-animation");
//     img1.classList.add("img1-animation");
//     img2.classList.add("img2-animation");
//     img3.classList.add("img3-animation");

// }); 
// document.querySelector(".contact-me").removeEventListener("mouseover", function() {
//     const form = document.querySelector(".contact-me-form");
//     form.classList.add("form-animation");
//     const details = document.querySelector(".contact-us-details");
//     details.classList.add("details-animation");
// });

// }

/**************************TYPEWRITER EFFECTS*********************************/
/******************************************************************************/

// TypeWriter effect for about para

// set up text to print, each item in array is new line
var aText = new Array(
    "I'm a Pre-final year Student pursuing BTech. Information Technology in Panimalar Engineering College. I have good knowledge with web development & design and especially with HTML, CSS, JavaScript. Since, I'm good at front-end skills, the websites that I create look more attractive and elegant. Also I'm a fast learner who always tries to give the best."
);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}







/*******************TyperWriter Effect for Home********************* */

class TypeWriter {
    constructor(txtElement, words, wait = 2000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];


        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 250;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 200;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}