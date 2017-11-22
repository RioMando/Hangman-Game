$(function(){


//document.onkeyup = function() {
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
			city = capitals[i];
			for ( j = 0; j < city.length; j++) {
				//Here assign every letter of the city to a variable
				var newvar = city.charAt(j);
				var onScreen = $("<h1>");
				onScreen.text(newvar);
			   	$("#demo").append(" _ ");
			   	console.log("text");
			}
			console.log("the city in guessCity: " + city);
//			myFunction();
		}

		//reading the city from the array one letter at the time
		function myFunction(char) {
//			for (userChar !=== "") {
				console.log (city);
			   	for (var l = 0; l < city.length; l++ ) {
			   		var newvar = city.charAt(l);
					var res = $("<h1>"); 
			   		res.text(newvar);
			   		console.log(newvar);
			   		$("#demo").append(newvar);
			   		console.log (newvar);
				}
//			}
		} // End myFunct

//			document.write("(La palabra " + city + " tiene " + j + " letras.)");
//			console.log(city);
//			console.log(city.length);
guessCity();
console.log("city at the end: " + city);
//}

/*
var   arr = [];
document.onkeyup = function(event) {
  var letter = event.key;
    arr.push(letter)
    console.log(arr)
};
*/

}); // end ready