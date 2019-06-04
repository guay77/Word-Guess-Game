var words = ["LIVERPOOL", "WARRIORS", "RAPTORS", "PATRIOTS", "MANCHESTER", "BARCELONA", "BRUINS", "BRONCOS"];


var maxGuess = 12;

var lettersGuessed = []


var remainingGuesses = 0;

var wins = 0;

var losses = 0;

var end_01 = false;

var wordAnswer;



function picker() {

    wordAnswer = words[Math.floor(Math.random() * words.length)];
    wordAnswer01 = [];
    for (var i = 0; i < wordAnswer.length; i++) {
        wordAnswer01[i] = "";
    }

    remainingGuesses = maxGuess;

    lettersGuessed = [];

    document.getElementById(("giphy-embed").src = "");
    document.getElementById("numGuesses").style.color = "";
    screenRefresh();

};

function screenRefresh() {
    document.getElementById("numWins").innerText = wins;
    document.getElementById("numLosses").innerText = losses;
    document.getElementById("numGuesses").innerText = remainingGuesses;
    document.getElementById("answerWord").innerText = wordAnswer01.join("");
    document.getElementById("guessedLetters").innerText = lettersGuessed;

};

function guesser(letter) {

    if (lettersGuessed.indexOf(letter) === -1) {
        lettersGuessed.push(letter);

        if (wordAnswer.indexOf(letter) === -1) {
            remainingGuesses--;

            if (remainingGuesses <= 3) {
                document.getElementById("numGuesses").style.color = "#e12d2e";
            }

        } else {
            for (var i = 0; i < wordAnswer.length; i++) {
                if (letter === wordAnswer[i]) {
                    wordAnswer01[i] = letter;
                }
            }
        }
    }

};

function winner() {

    if (wordAnswer01.indexOf("") === -1) {
        wins++;
        end_01 = true;

    }
};

function loser() {

    if (remainingGuesses <= 0) {
        losses++;
        end_01 = true;
        document.getElementById("numLosses").style.color = "#e12d2e";
    }

};

document.onkeyup = function(event) {

    if (end_01) {
        picker();
        end_01 = false;
    } else {

        if (event.keyCode >= 65 && event.keyCode <= 90) {
            guesser(event.key.toUpperCase());
            screenRefresh();
            winner();
            loser();
        }
    }
};


picker();
screenRefresh();

console.log(wordAnswer);