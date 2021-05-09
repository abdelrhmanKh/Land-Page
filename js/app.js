/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const mainContainer = document.getElementsByTagName('main')[0];
const navList = document.getElementById('navbar__list');
let arrayOfSections = Array.from(document.querySelectorAll('section'));
let numOfSections = arrayOfSections.length;
const buttonup = document.getElementById('goUp');




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function creatNavElements() {
    navList.innerHTML = '';
    arrayOfSections = Array.from(document.querySelectorAll('section'));
    // to loop over every section to get order id  and how many sections
    for (section of arrayOfSections) {
        // get order or name ,get id 
        sectionOrder = section.getAttribute('data-nav');
        sectionId = section.getAttribute('id');
        // creat li element & add li ^ element a link to evey section in page & put li that hav ancer link to the nav bar 
        navContent = document.createElement('li');
        navContent.innerHTML = `<a class="nav-link" href=#${sectionId} data-section='${sectionId}' >${sectionOrder}</a>`;
        navList.appendChild(navContent);
    }
}
// add click event to every <li>
function goToSectionSelected() {
    navList.addEventListener('click', function (linkclick) {
        linkclick.preventDefault();
        document.getElementById(linkclick.target.dataset.section).scrollIntoView();
        activeScetion(linkclick.target.dataset.section);

    });

}
function activeScetion(onViewId) {
    //set active class to nav link
    if (onViewId == 'none') {
        document.querySelector('.active')?.classList.remove('active');
        document.querySelector('.active-Section')?.classList.remove('active-Section');
    } else {
        document.querySelector('.active')?.classList.remove('active');
        document.querySelector('.active-Section')?.classList.remove('active-Section');
        document.querySelector(`[href='#${onViewId}']`).classList.add('active');
        document.querySelector(`#${onViewId}`).classList.add('active-Section');
    }


    //set active class to section selected from nav link



}
//set active class on scroll view and make it active when we reach the last 1/3 of section
window.addEventListener('scroll', () => {
    let currentsection = '';
    arrayOfSections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentsection = section.getAttribute('id');
            activeScetion(currentsection);

        } else if (pageYOffset == 0) {
            activeScetion('none');
        }




    })


    // go up botton  display on scroll at the end of section 1
    'use strict';
    if (window.pageYOffset >= 629) {
        buttonup.style.display = 'block';

    } else {
        buttonup.style.display = 'none';
    }

})
// function to create section when click create section div (button)
function createSection() {
    // creating Element and give it to varialbe and give it the id and data-nav
    let creattionsection = document.createElement('section');
    creattionsection.setAttribute('id', `section${numOfSections + 1}`);
    creattionsection.setAttribute('data-nav', `Section ${numOfSections + 1}`);

    creattionsection.innerHTML = `<div class="landing__container">
         <h2>Section ${numOfSections + 1}</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
         dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
        imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
        bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
        elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
         nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
        semper in tellus. Sed congue et odio sed euismod.</p>
       <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
    luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
    porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>` ;

    numOfSections++;
    mainContainer.appendChild(creattionsection);
    creatNavElements();


}
// function to delete section when click Delete section div (button) and only will delete until it reach section 3 it wont delete and pop up  alert
function deletesection() {
    if (numOfSections > 3) {
        let itemToremove = arrayOfSections[numOfSections - 1];
        itemToremove.parentNode.removeChild(itemToremove);
        numOfSections--;
        creatNavElements();
    } else {
        alert('You can\'t delete more');
    }


}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/




// build the nav 
creatNavElements();

// Add class 'active' to section when near top of viewport
goToSectionSelected();



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


