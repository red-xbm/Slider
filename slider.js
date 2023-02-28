// get slider Items | Array.from [ES6 Feature]
var sliderImg = Array.from(document.querySelectorAll('.slider-container img'));

// get number of slides
var slidesCount = sliderImg.length;

// set current Slide
var currentSlide = 1;

// slide number element 
var slideNumberElement = document.getElementById('slide-number');

// previous and next buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// create the main ul element
var pagination = document.createElement('ul');

// set id on created ul element
pagination.setAttribute('id', 'pagination-ul');

// create list items based on slides count
for (var i = 1; i <= slidesCount; i++) {

    // create the li 
    var paginationItem = document.createElement('li');

    // set custom attribute
    paginationItem.setAttribute('data-index', i);

    // set Item content
    paginationItem.appendChild(document.createTextNode(i));

    // append items to the main ul list
    pagination.appendChild(paginationItem);
}

// add the created ul element to the page 
document.getElementById('indicators').appendChild(pagination);

// get the new created new ul
var pCreatedUl = document.getElementById('pagination-ul');

// get pagination Items | Array.from [ES6 Feature]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop through all bullets item
for (var i = 0; i < paginationBullets.length; i++) {

    paginationBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();
    }
}

// trigger the checker function 
theChecker();


// // handle click on previous and text buttons
nextButton.onclick = nextSlide; //  ممسوحات عند الزيرو
prevButton.onclick = prevSlide;

// next slide function 
function nextSlide() {

    if (nextButton.classList.contains('disabled')) {
        
        // nothing 
        return false;
    }
   else {
        currentSlide++;

        theChecker();
    }
}

function prevSlide() {
    
    if (prevButton.classList.contains('disabled')) {
        
        // nothing 
        return false;
    }
   else {
        currentSlide--;

        theChecker();
    }
}

// create the Checker function
function theChecker() {

    // set the slide number
    slideNumberElement.textContent = (currentSlide) + '-' + (slidesCount); 

    // remove all active
    removeAllActive();

    // set active class on current slide
    sliderImg[currentSlide - 1].classList.add('active');

    // set accive class on pagination item
    pCreatedUl.children[currentSlide - 1].classList.add('active');

    // check if current slide is the first
    if (currentSlide == 1) {
        // add disabled class on previous button
        prevButton.classList.add('disabled');
    } else {
        // remove disabled class from previous button
        prevButton.classList.remove('disabled');
    }

        // check if current slide is the last
        if (currentSlide == slidesCount) {
            // add disabled class on next button
            nextButton.classList.add('disabled');
        } else {
            // remove disabled class from next button
            nextButton.classList.remove('disabled');
        }
}

// remove all active classes from img and bullets
function removeAllActive() {

    // loop through img
    sliderImg.forEach(function (img) {

        img.classList.remove('active');
    });

    // loop through pagination bullets
    paginationBullets.forEach(function (bullet) {

        bullet.classList.remove('active');

    });
}