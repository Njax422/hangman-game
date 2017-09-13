var words = [
	{word:'grumpy cat',
	image: ""},
	'lolcat',
	'success kid',
	'kermit',
	'willy wonka',
	'sheldon',
	'oprah',
	'philosoraptor'];
	console.log(words[0].word);
var word = words[0].word[Math.floor(Math.random()*words.length)];
	console.log('word: ', word);
var answer = [];
var guess; 
var guesses = [];
var guessesRemaining = 6;
var winPoints=0;
var keepPlaying;

	for (var i=0; i<word.length; i++){
		if (word[i]===" ") {
			answer.push(" ");
		} else {
		answer.push("-");
		}
	}

	document.getElementById('currentWord').innerHTML= answer.join("");
	document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
	document.getElementById("winPoints").innerHTML=winPoints; 

	document.onkeyup = function(event){
		console.log(event);

		if (!/^[A-Za-z]/i.test(event.key)) {
	        alert("Invalid characters");
	    } else {

			if (word.indexOf(event.key) > -1) {
			
		 		for (var i = 0; i < word.length; i++) {
		 			if (event.key === word[i]) {
		 				answer[i] = event.key;	
		 			}
		 		}
		 		document.getElementById('currentWord').innerHTML= answer.join("");

		 		if (answer.indexOf("-")===-1) {
		 			winPoints++;
		 			document.getElementById("winPoints").innerHTML=winPoints;
			 			var keepPlaying = confirm("You won! Want to play again?");
				 			if (keepPlaying) {
				 				reset();
					 		}
		 		}

		 	} else {
		 		
		 		if(guesses.indexOf(event.key)===-1) {
			 		guessesRemaining--;
			 		console.log(guessesRemaining);
			 		document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
			 		guesses.push(event.key);
			 		document.getElementById("lettersGuessed").innerHTML=guesses;
					if (guessesRemaining===0) {
			 			keepPlaying = confirm("You lose! Want to play again?");
				 			if (keepPlaying) {
				 				reset();
					 		}
					}
			 	}
		 	}
		 }
	 };
	 function reset() {
		guessesRemaining = 6;
		document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
		guesses = [];
		document.getElementById("lettersGuessed").innerHTML=guesses;
		answer.length = 0;
		word = words[Math.floor(Math.random()*words.length)];
			for (var i=0; i<word.length; i++){
				answer.push("-");
			}
		document.getElementById('currentWord').innerHTML= answer.join("");
		console.log(word);
	}
