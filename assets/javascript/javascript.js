$(function(){

  var capitals = [
    "albany", "austin", "helena", "juneau",
    "lincoln", "phoenix", "sacramento", "trenton"
  ];
  var city, newCity="";
  var ciudad = "";
  var letter = ""; 
  var i;
  var cityToGuess = [];
  //Randomly selection of cities in array of capitals


  function initCity() {
  i = Math.floor(Math.random()*capitals.length);
  city = capitals[i];
  console.log("The city inthe array is the # " + i + ": " + city);
  	console.log("city in initCity: " + city);
 	for (j = 0; j < city.length; j++) {
 		cityToGuess[j] = "_";
 	}
 	console.log("City to guess @ initCity: " + cityToGuess);
  }//End initCity()

  function displayCity() {
   	for (var j = 0; j < city.length; j++) {
  	  if (j == 0) {
  	  	cityToGuess[j] = cityToGuess[j].toUpperCase();
  	  //console.log("city here@ display city: " + otro);
      }//End if-else
      $("#citGss").append(cityToGuess[j] + " ");
    }//End for-loop
  }//End displayCity()

  function guessLetter() {
//    $("#city").empty();
    for (var j = 0; j < city.length; j++) {
      //Here assign every letter of the city to a variable
      var newvar = city.charAt(j);
      
      if (cityToGuess[j] === "_") {
        if (letter == newvar) {
        	cityToGuess[j] = letter;
        } 
      }//End if-else loop
    }//End for-loop 
    $("#citGss").empty();
    displayCity();
    //$("#city").append(ciudad);
  }//End guessLetter() 
/*
  function guessCity() {
    for ( j = 0; j < city.length; j++) {
      //Here assign every letter of the city to a variable
      var newvar = city.charAt(j);
      var onScreen = $("<h1>");
      onScreen.text(newvar);
      $("#citGss").append("_");
      console.log("text");
 //     newCity.push("_ ");
    }//End for-loop
    console.log("the city in guessCity: " + city);
  }//End guessCity()


//reading the city from the array one letter at the time
  function myFunction(char) {
//    for (userChar !=== "") {
    console.log (city);
      for (var l = 0; l < city.length; l++ ) {
        var newvar = city.charAt(l);
        var res = $("<h1>"); 
       	res.text(newvar);
       	console.log(newvar);
       	$("#citGss").append(newvar);
       	console.log (newvar);
      }//End for-loop
//    }//End for(userChar)

  }//End myFunction()
  
 */




initCity();
//  displayCity();
//document.onkeyup = function() {
  //Definition of the array of cities of USA

  document.onkeyup = function(event) {
//    letter = event.key;
    letter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("Not good");
    guessLetter();
    
  };//End onkeyup

//console.log(letter.charCodeAt(0));
//console.log("letter value at the end: " + letter);
//console.log(letter.charCodeAt(0));

}); // end ready
