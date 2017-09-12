var words = ['grumpycat', 'lolcat', 'success kid', 'kermit'];
var word = words[Math.floor(Math.random()*words.length)];
	console.log('word: ', word);
var answer = [];

var remainingLetters=word.length;
var guess; 
var guesses = [];
var guessesRemaining = 6;
var winPoints=0;

	for (var i=0; i<word.length; i++){
		answer.push("-");
	}

	document.getElementById('currentWord').innerHTML= answer.join("");
	document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
	document.getElementById("winPoints").innerHTML=winPoints; 

	document.onkeyup = function(event){
		console.log(event);


		if (word.indexOf(event.key) > -1) {
		
	 		for (var i = 0; i < word.length; i++) {
	 			if (event.key === word[i]) {
	 				answer[i] = event.key;	
	 			}
	 		}
	 		if (answer.indexOf("-")===-1) {
	 			winPoints++;
	 			document.getElementById("winPoints").innerHTML=winPoints;
	 		}

	 		document.getElementById('currentWord').innerHTML= answer.join("");	
	 	} else {
	 		
	 		if(guesses.indexOf(event.key)===-1) {
		 		guessesRemaining--;
		 		console.log(guessesRemaining);
		 		document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
		 		guesses.push(event.key);
		 		document.getElementById("lettersGuessed").innerHTML=guesses;
		 	}












		 	
	 	}

















	 };
