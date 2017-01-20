(function () {
   
	 //set up variables for all the images, the headline, the subtext, the main content, and an empty 
    var theImages = document.querySelectorAll('.image-holder'),
        theHeading = document.querySelector('.heading'),
        theSubheading = document.querySelector('.main-copy h2'),
        theSeasonText = document.querySelector('.main-copy p'),
        appliedClass;

    function changeElements() {
    	//take the id of the clicked element, use it to retrieve the correct content
    	//and then replace the content on the page
    	theSubheading.classList.remove(appliedClass);
    	theSubheading.classList.remove(appliedClass);
    	theHeading.classList.remove(this.id);

    	//change the color
    	theSubheading.classList.add(this.id);
    	theHeading.classList.add(this.id);

    	appliedClass = this.id;

        theSubheading.firstChild.nodeValue = dynamicContent[this.id].headline;
        theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text;

    }

        [].forEach.call(theImages, function(theImages) {
       	theImages.addEventListener('click', changeElements, false);
        });

        //load the content when the page loads
        //theSubheading.firstChild.nodeValue = dynamicContent['spring'].headline;
        //theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
        //theHeading.classList.add('spring');

})();