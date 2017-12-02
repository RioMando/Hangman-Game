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
  var city="";    //to store the city selected ramdomly from cities[]
  var letter = ""; 
  var i;
  var cityToGuess = [];  //To store the city with underscores while is guessed
  var countWin = 0;
  var count = 0;
  var gessLft = 8;
  var countLoss=0;
  var k=true;
    
    function resetSettings(){
      $("#yourG").empty();
      gessLft=8;
      updateScore();
      count = 0;
      initCity();
      updateGuess();
    } //End resetSettings()

  /* Randomly selection of cities from array capitals[]
     and generation of a word with underscores for every letter in the selected city */
  function initCity() {
    i = Math.floor(Math.random()*capitals.length);
    city = capitals[i];                 //Selection of random city
    console.log("City to guess: " + city);
    for (j = 0; j < city.length; j++) {
      cityToGuess[j] = "_";             //to fill the underscores for each letter in the city
    } //End for-loop
  } //End initCity()

  // To display actual scores in screen
  function updateScore() {
  	$("#wins").empty();
    var newWin = countWin.toString();
    newWin = $("<h3>");
    $("#wins").append(" " + countWin);
    console.log("Win: " + countWin);
    $("#loss").html(" " + countLoss);
  } //End updateScore()

  // To display on screen the remaining number of guesses
  function updateGuess(){
    $("#guessLft").empty();
    var nwGss = gessLft.toString();
    var nwGss = $("<h3>");
    $("#guessLft").append(" " + gessLft);
  } //End updateGuess

  // function called to display the city that is been guesses
  function displayCity() {
   	for (var j = 0; j < city.length; j++) {
  	  if (j == 0) {
  	  	cityToGuess[j] = cityToGuess[j].toUpperCase(); //To assure capitalize cities
      }//End if-loop
      $("#citGss").append(cityToGuess[j] + " ");
    } //End for-loop
  } //End displayCity()

  /*
    */
  function guessLetter() {
    var z=0;
    for (var j = 0; j < city.length; j++) {
      var newvar = city.charAt(j);  //Assign city's letter by letter to newvar
      if (cityToGuess[j] === "_") {  
        if (letter == newvar) {
        	cityToGuess[j] = letter;  // If typed letter is part of the city change "_" by the letter
        	count++;                  // Count number of letters guessed correctly
            z=1;                    // Flag to know if the typed letter is part of the city
        } //End 1st if-else loop
      } //End 2nd if-else loop
    } //End for-loop
    if (z===0){
      var lett = $("<h3>");
      $("#yourG").append(letter + " ");
      gessLft--;
      updateGuess();
    }//End if-loop

    if (count===city.length) {  //If the city is correctly guessed
      countWin++;
      resetSettings()
    }
    if (gessLft===0) {  // if you lost
    	countLoss++;
      resetSettings();
    }
    $("#citGss").empty();
    displayCity();
  }//End guessLetter() 

  document.onkeyup = function(event) {
    console.log("var K antes de if else: " + k); 
    if (k) {         // Press any key to start (reset values and set screen to start game)
      k = false;
      updateGuess();
      updateScore();
      initCity();
      displayCity();
    } else {
      letter = String.fromCharCode(event.keyCode).toLowerCase();
      guessLetter();
    console.log("var K despues: " + k); 
    } // Enf if-else
  console.log("var K outside if-else: " + k);   
  };//End onkeyup

}); // end ready -for JQuery-
