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
  var countWin = 0;
  var gessLft = 9;
  //Randomly selection of cities in array of capitals

  function updateScore() {
    var newWin = countWin.toString();
    var newWin = $("<h3>");
    $("#wins").append(" " + countWin);
    console.log("Win: " + countWin);
  }

  function updateGuess(){
    var nwGss = gessLft.toString();
    var nwGss = $("<h3>");
    $("#guessLft").append(" " + gessLft);
  }

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
    for (var j = 0; j < city.length; j++) {
      var newvar = city.charAt(j); //Assign every letter of the city to newvar
      if (cityToGuess[j] === "_") {
        if (letter == newvar) {
        	cityToGuess[j] = letter;
        }//End 1st if-else loop
      }//End 2nd if-else loop
    }//End for-loop 
    $("#citGss").empty();
    displayCity();
  }//End guessLetter() 

  document.onkeyup = function(event) {
    letter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("Not good");
    guessLetter();
  };//End onkeyup

//console.log(letter.charCodeAt(0));
//console.log(letter.charCodeAt(0));
updateScore();
updateGuess();
initCity();


}); // end ready
