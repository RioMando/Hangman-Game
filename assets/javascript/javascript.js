$(function(){

  var capitals = [
    "albany",
    "austin",
    "helena",
    "juneau",
    "lincoln",
    "phoenix",
    "sacramento",
    "trenton"
  ];
  var city, newCity="";
  var ciudad = "";
  var letter = ""; 
  var i;
  var cityToGuess = [];
  var countWin = 0;
  var count = 0;
  var gessLft = 9;
  //Randomly selection of cities in array of capitals

  function updateScore() {
  	$("#wins").empty();
    var newWin = countWin.toString();
    var newWin = $("<h3>");
    $("#wins").append(" " + countWin);
    console.log("Win: " + countWin);
  }

  function updateGuess(){
    $("#guessLft").empty();
    var nwGss = gessLft.toString();
    var nwGss = $("<h3>");
    $("#guessLft").append(" " + gessLft);
  }

  function initCity() {
    i = Math.floor(Math.random()*capitals.length);
    city = capitals[i];
    console.log("The city inthe array is the # " + i + ": " + city);
  	for (j = 0; j < city.length; j++) {
 		cityToGuess[j] = "_";
 	}//End for-loop
 	console.log("City to guess @ initCity: " + cityToGuess);
  }//End initCity()

  function displayCity() {
   	for (var j = 0; j < city.length; j++) {
  	  if (j == 0) {
  	  	cityToGuess[j] = cityToGuess[j].toUpperCase();//To assure capitalize cities
      }//End if-else
      $("#citGss").append(cityToGuess[j] + " ");
    }//End for-loop
  }//End displayCity()

/*  function displayPic() {
    $("citGss").empty();
    $("#citGss").append("src=assets/images/austin.jpg");	
  }*/

  function guessLetter() {
    var z=0;
    for (var j = 0; j < city.length; j++) {
      var newvar = city.charAt(j); //Assign every letter of the city to newvar
      if (cityToGuess[j] === "_") {
        if (letter == newvar) {
        	cityToGuess[j] = letter;
        	count++;
            z=1;
        }//End 1st if-else loop
      }//End 2nd if-else loop
    }//End for-loop
    if (z===0){
      var lett = $("<h3>");
      console.log("letter inside display: " + letter);
      $("#yourG").append(letter);
      gessLft--;
      updateGuess();
    }//End if-loop
    
    function resetSettings(){
      $("#yourG").empty();
      gessLft=9;
      updateScore();
      count = 0;
      initCity();
      updateGuess();
    }
    if (count===city.length) {
      countWin++;
      resetSettings()
    }
    if (gessLft===0) {
    	resetSettings();
    }

    $("#citGss").empty();
    displayCity();
    if (gessLft===0){

    }
  }//End guessLetter() 

  document.onkeyup = function(event) {
    letter = String.fromCharCode(event.keyCode).toLowerCase();
    guessLetter();
  };//End onkeyup

//console.log(letter.charCodeAt(0));
//console.log(letter.charCodeAt(0));
updateScore();
updateGuess();
initCity();


}); // end ready
