document.onkeyup = function() {
		//Definition of the array of cities of USA
		var capitals = [
			"Albany", "Austin", "Helena",  "Juneau",
			"Lincoln", "Phoenix", "Sacramento", "Trenton"
		];
		var city="";
		console.log(city);
	//Randomly selection of cities in array of capitals

		//Random number for the length of the array 
		var i = Math.floor(Math.random()*capitals.length);
		console.log("The city inthe array is the #: " + i);
		
		function guessCity() {
//			document.write("Guess the US city: " + capitals[i]);
			var city = capitals[i];
			for ( j = 0; j < city.length; j++) {
				//Here assign every letter of the city to a variable
				var newvar = city.charAt(j);
				var onScreen = $("<h1>");
				onScreen.text(newvar);
//			   	$("#demo").append(onScreen);
			   	$("#demo").append(" _ ");
			   	//Here, write an underline _ for every letter of the city.
//				document.write(" _ ");
			}
			console.log(city);
			myFunction();
		}

		//reading the city from the array one letter at the time
		function myFunction(char) {
			for (userChar !=== "") {
				console.log (city);
			   	for (var l = 0; l < city.length; l++ ) {
			   		var newvar = city.charAt(l);
					var res = $("<h1>"); 
			   		res.text(newvar);
			   		console.log(newvar);
			   		$("#demo").append(newvar);
			   		console.log (newvar);
				}
			}
		}

//			document.write("(La palabra " + city + " tiene " + j + " letras.)");
//			console.log(city);
//			console.log(city.length);
guessCity();

}

 $("#demo").on("keyup change", function() {
 	userChar = this.userChar;
 	myFunction(userChar)
}
/**      // Let's start by grabbing a reference to the <span> below.
      var userText = document.getElementById("#demo");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        userText.textContent = event.key;
//        console.log("userText =" + userText.textContent );         
      };**/

