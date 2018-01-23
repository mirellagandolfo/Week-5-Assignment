console.log("help")
/*when varible field cityName = eg. New York change image stored in body tag 'background' to new image located in ' images/nyc.jpg'
create variable then this variable entry when click function listener is selected change background accordingly.
*/


 $('#submit-btn').click(function(event) { //jquery is called upon when the click function event listener is actived on the id 'submit-btn' element.

 event.preventDefault()// we use this code to prevent the default occuring which is upon click refresh the window

 var userInput = $('#city-type').val() //the variable 'useInput' is assigned to the jquery on element with id of 'city-type' - we use .val instead of .txt as the input element does not have a closing tag

if (userInput === "nyc" || userInput === "New York City" || userInput === "NYC"){// when variable useInput is NYC or variable is New York City or variable is NYC....

 $('body').css('background', 'url(images/nyc.jpg)')
}//jquery changes the value of the url in the background property in the body tag

else if (userInput === "San Francisco" || userInput === "SF" || userInput === "Bay Area"){// // or if above is false, when variable useInput is San Francisco or variable is SF or variable is Bay Area...

  $('body').css('background', 'url(images/sf.jpg)')
}//jquery changes the value of the url in the background property in the body tag

else if (userInput === "LA" || userInput === "Los Angeles" || userInput === "LAX"){// or if above is false, when variable useInput is LA or variable is Los Angeles or variable is LAX...

 $('body').css('background', 'url(images/la.jpg)')
}//jquery changes the value of the url in the background property in the body tag

else if (userInput === "Austin" || userInput === "ATX"){// or if  above is false, when variable useInput is Austin or variable is ATX…

 $('body').css('background', 'url(images/austin.jpg)')
}//jquery changes the value of the url in the background property in the body tag

else if (userInput === "Sydney" || userInput === "SYD"){// or if  above is false, and the variable useInput is Austin or variable is ATX…

 $('body').css('background', 'url(images/sydney.jpg)')
}//jquery changes the value of the url in the background property in the body tag

else{
  $('body').css('background','url(images/images/citipix_skyline.jpg) no-repeat center center fixed;')
}//otherwise the value of the url in the background property in the body tag is the same.
})
