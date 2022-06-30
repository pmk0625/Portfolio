/*var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
*/
var HIDDEN_DETAIL_CLASS = 'hidden detail';
var ESC_KEY = 27;

/*//Grabs the image-url
function imageFromThumb(thumb){
    'use strict';
    return thumb.getAttribute('data-image-url');
}

//Grabs the image-title
function titleFromThumb(thumb){
    'use strict';
    return thumb.getAttribute('data-image-title');
}

//Swaps image in project list with profile picture
function setDetails(imageUrl){
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);
}

//Call SetDetails Function
function setDetailsFromThumb(thumb){
    setDetails(imageFromThumb(thumb), titleFromThumb(thumb));
}

//Handles the Event when clicked
function addThumbClickHandler(thumb){
    'use strict';
    thumb.addEventListener('click', function (event){
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

//Array of images project list with assigned role "Trigger"
function getThumbnailsArray(){
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

//Key press functionality. Dev tool console will log 27 when escape is pressed.
function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keydown', function(event){
        event.preventDefault();
        console.log(event.code);
        if (event.code === ESC_KEY) { hideDetails(); }
    });
}

//Initialize all events
function initializeEvents(){
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}*/

//Remove hidden detail class (Focus on clicked image)
function showDetails(){
    'use strict';
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}

//Add hidden detail class (Revert to Original)
function hideDetails(){
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

initializeEvents();

