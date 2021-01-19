// alert ('Hello world')
console.log('hello world')
// Chapter 3
//Task 1 

// let ranBd = ["Face", "Nose", "Hair"];
// let ranAnBdP = ["Tail", "Foot", "Fur"]
// let ranAdj = ["Smelly", "Boring", "Stupid"];
// let ranAnim = ["Fly", "Marmot", "Monkey", "Rat"];

// var randomBodyPart = ranBd[Math.floor(Math.random() * ranBd.length)];
// var randomAnimalBodyPart = ranAnBdP[Math.floor(Math.random() * ranAnBdP.length)];
// var randomAdjective = ranAdj[Math.floor(Math.random() * ranAdj.length)];
// var randomAnimal = ranAnim[Math.floor(Math.random() * ranAnim.length)];

// var randomInsult = `Your ${randomBodyPart} is more ${randomAdjective} than a ${randomAnimal}'s ${randomAnimalBodyPart} `
//  console.log(randomInsult)


 // Task 4
//  [3, 2, 1].join(" is bigger than ");

// //Chapter 4.
// var scores = {
//     nick: 0,
//     philly: 0
//   };
  
//   // Increase Philly's score by 10
//   scores.philly += 10;
  
//   // Increase Nick's score by 2
//   scores.nick += 20;
  
//   // Show scores
//   console.log(scores)
//   // { nick: 90, philly: 100 }
//Chapter 6
// Chapter 3
//Task 1
// var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"],
//     res = [];

// for (var i = 0; i < animals.length; i++) {
//   res += "Awesome " + animals[i] + '//' ;
// }

// console.log(res);
//Task2
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
//     var randomString = "";


//     for (var i = 0; i < 7; i++) {
//       randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
//     }

//     console.log(randomString);
//     //Task 3
//     var inp = "javascript is awesome";
//     var out = "";

//     for (var i = 0; i < inp.length; i++) {
//       if (inp[i] === "a") {
//         out += "4";
//       } else if (inp[i] === "e") {
//         out += "3";
//       } else if (inp[i] === "i") {
//         out += "1";
//       } else if (inp[i] === "o") {
//         out += "0";
//       } else {
//         out += inp[i];
//       }
//     }

//     console.log(out);

// Task 7
	    // Create an array of words
    // var words = [
    //   "javascript",
    //   "monkey",
    //   "mother",
    //   "Father"
    // ];

    // // choose a random word
    // var word = words[Math.floor(Math.random() * words.length)];

    // // Set up the answer array
    // var answerArray = [];
    // for (var i = 0; i < word.length; i++) {
    //   answerArray[i] = "_";
    // }

    // var remainingLetters = word.length;

    // // The game loop
    // while (remainingLetters > 0) {
    //   // Show the player their progress
    //   alert(answerArray.join(" "));

    //   // Get a guess from the player
    //   var guess = prompt("Try a letter, or click Cancel.");
    //   if (guess === null) {
    //     // Exit the game loop
    //     break;
    //   } else if (guess.length !== 1) {
    //     alert("Please enter a single letter.");
    //   } else {
    //     guess = guess.toLowerCase();
    //     // Update the game state with the guess
    //     for (var j = 0; j < word.length; j++) {
    //       if (word[j] === guess) {
    //         answerArray[j] = guess;
    //         remainingLetters--;
    //       }
    //     }
    //   }
    // // The end of the game loop
    // }

    // // Show the answer and congratulate the player
    // alert(answerArray.join(" "));
    // alert("Victory! The answer was " + word);

    //Chapter 8,
    var pickWord = function () {
        var words = [
          "Father",
          "Mother",
          "Cat",
          "Dog"
        ];
  
        return words[Math.floor(Math.random() * words.length)];
      };
  
      var setupAnswerArray = function (word) {
        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
          answerArray[i] = "_";
        }
  
        return answerArray;
      };
  
      var showPlayerProgress = function (answerArray) {
        alert(answerArray.join(" "));
      };
  
      var getGuess = function () {
        return prompt("Guess a letter, or click Cancel to stop playing.");
      };
  
      var updateGameState = function (guess, word, answerArray) {
        var appearances = 0;
        for (var j = 0; j < word.length; j++) {
          if (word[j] === guess) {
            answerArray[j] = guess;
            appearances++;
          }
        }
  
        return appearances;
      };
  
      var showAnswerAndCongratulatePlayer = function (answerArray) {
        showPlayerProgress(answerArray);
        alert("Good job! The answer was " + answerArray.join(""));
      };
  
      var word = pickWord();
      var answerArray = setupAnswerArray(word);
      var remainingLetters = word.length;
  
      while (remainingLetters > 0) { showPlayerProgress(answerArray); var guess = getGuess();
        if (guess === null) {
          break;
        } else if (guess.length !== 1) {
          alert("Please enter a single letter.");
        } else {
          var correctGuesses = updateGameState(guess, word, answerArray);
          remainingLetters -= correctGuesses;
        }
      }
  
      showAnswerAndCongratulatePlayer(answerArray);

