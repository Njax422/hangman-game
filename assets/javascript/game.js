var words = [
	{
		word:'grumpy cat',
		image: ""
	},
	{
		word:'lolcat',
		image: ""
	},
	{
		word:'success kid',
		image: ""
	},
	{
		word:'kermit',
		image: ""
	},
	{
		word:'willy wonka',
		image: ""
	},
	{
		word:'sheldon',
		image: ""
	},
	{
		word:'oprah',
		image: ""
	},
	{
		word:'philosoraptor',
		image: ""
	}];
var index = Math.floor(Math.random()*words.length);
var word = words[index].word;
	console.log('word: ', word);
var answer = [];
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
document.getElementById('guessesRemaining').innerHTML=guessesRemaining;
document.getElementById('winPoints').innerHTML=winPoints; 

	document.onkeyup = function(event){
		console.log(event);

		if (!/^[A-Za-z]$/i.test(event.key)) {
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
		 			setTimeout(function() {
			 			var keepPlaying = confirm("You won! Want to play again?");
				 			if (keepPlaying) {
				 				reset();
							}
					}, 100);
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
	 	guesses = [];
		guessesRemaining = 6;
		answer.length = 0;
		index = Math.floor(Math.random()*words.length);	
		word = words[index].word;
		console.log(word);
			for (var i=0; i<word.length; i++){
				if (word[i]===" ") {
					answer.push(" ");
				} else {
					answer.push("-");
				}
			}
		document.getElementById("lettersGuessed").innerHTML=guesses;
		document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
		document.getElementById('currentWord').innerHTML= answer.join("");
	}
	