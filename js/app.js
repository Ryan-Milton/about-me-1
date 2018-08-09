'use strict';

var count = 0;
var gameTwo = 0;
var gameThree = 3;

var answerY = 'y';
var answerYes = 'yes';
var answerN = 'n';
var answerNo = 'no';

var trueStatement = 'You Got the Question Right!';
var falseStatement = 'You Got the Question Wrong!';
var otherStatement = 'You did not answer in the required format. Minus one point :(';

var randomNumber = Math.floor(Math.random() * 21);  
console.log('Generated Random Number: ' + randomNumber);

var name = prompt('What\'s your name?');
alert('Hi ' + name + '! Would You Like to Test Your Knowledge About ? Please Answer the Following Questions in a Yes/No Format');
console.log('User Name: ' + name);

var answerOne = prompt('I was born in Seattle?').toLowerCase();
console.log('User Answer #1 - Seattle: ' + answerOne);

if (answerOne == answerN || answerOne == answerNo) {
    alert('You answered NO to the first question.' + trueStatement);
    count++;
} else if (answerOne == answerY || answerOne == answerYes) {
    alert('You answered YES to the first question.' + falseStatement);
} else {
    alert(otherStatement);
}

var answerTwo = prompt('I served in the Navy for five years?').toLowerCase();
console.log('User Answer #2 - Navy: ' + answerTwo);

if (answerTwo == answerN || answerTwo == answerNo) {
    alert('You answered NO to the second question.' + trueStatement);
    count++;
} else if (answerTwo == answerY || answerTwo == answerYes) {
    alert('You answered YES to the second question.' + falseStatement);
} else {
    alert(otherStatement);
}

var answerThree = prompt('I lived in San Diego for two years?').toLowerCase();
console.log('User Answer #3 - San Diego: ' + answerThree);

if (answerThree == answerN || answerThree == answerNo) {
    alert('You answered NO to the third question.' + falseStatement);
} else if (answerThree == answerY || answerThree == answerYes) {
    alert('You answered YES to the third question.' + trueStatement);
    count++;
} else {
    alert(otherStatement);
}

var answerFour = prompt('I have a degree in Bio Engineering?').toLowerCase();
console.log('User Answer #4 - Bio Engineering: ' + answerFour);

if (answerFour == answerN || answerFour == answerNo) {
    alert('You answered NO to the fourth question.' + trueStatement);
    count++;
} else if (answerFour == answerY || answerFour == answerYes) {
    alert('You answered YES to the fourth question.' + falseStatement);
} else {
    alert(otherStatement);
}

var answerFive = prompt('I am an only child?').toLowerCase();
console.log('User Answer #5 - Only Child: ' + answerFive);

if (answerFive == answerN || answerFive == answerNo) {
    alert('You answered NO to the fifth question.' + falseStatement);
} else if (answerFive == answerY || answerFive == answerYes) {
    alert('You answered YES to the fifth question.' + trueStatement);
    count++;
} else {
    alert(otherStatement);
}

alert('You scored ' + (count * 100) / 5 + ' percent');

alert('Now let us play another game.');

var randomGuess = parseInt(prompt('Can you guess a number that I am thinking of between 0 and 20? You get four tries!'),10);
console.log('First Number Guess: ' + randomGuess);

var i = 1;

while (i < 4) {
    if(randomNumber === randomGuess) {
        alert('YES, that is it! You Won!!!');
        i = 5;
        gameTwo = 1;
    } else if(randomNumber > randomGuess) {
        alert('Hint: The answer is higher.');
        randomGuess = parseInt(prompt('Guess Again?'),10);
        i++;
        console.log('Loop' + i+'Guess: ' + randomGuess);
    } else if(randomNumber < randomGuess) {
        alert('Hint: The answer is lower.');
        randomGuess = parseInt(prompt('Guess Again?'),10);
        i++;
        console.log('Loop' + i + 'Guess: ' + randomGuess);
    } else {
        alert('That is not even a number. Or...you should not spell it out. We cannot recognize words you know.');
        randomGuess = parseInt(prompt('Guess Again?'),10);
        i++;
        console.log('Loop' + i + 'Guess: ' + randomGuess);
    }
}

if (i===4 && randomGuess===randomNumber) {
    alert('You Won on the Last Try!');
    gameTwo = 1;
}

alert('Game Over. If you did not get a Winning Message, that means you lost.');


var arrayNumber = new Array(10);

for (i=0; i<10; i++) {
    arrayNumber[i] = Math.floor(Math.random() * 101);
}
console.log('Array Random Numbers: ' + arrayNumber);

alert('Because I am not very creative, let us play another guessing game. I will pick 10 random numbers between 0 and 100 and you need to match one of those numbers');

var arrayGuess = parseInt(prompt('Pick Your First Number. You have SIX tries'), 10);
console.log('First Array Guess: ' + arrayGuess)

var j = 1;

while (j<6) {
    if (arrayNumber.indexOf(arrayGuess) === -1) {
        arrayGuess =  parseInt(prompt('NOPE! Guess Again'), 10);
        j++;
        console.log('Loop ' + j + ' Array guess: ' + arrayGuess);
    } else {
        alert('Wow! You got one of the numbers!');
        j=7;
        gameThree = 1;
    }
}

if (j===6 && arrayNumber.indexOf(arrayGuess) !== -1) {
    alert('You Won on the Last Try!');
    gameThree = 1;
} 

alert('Game Over. If you did not get a Winning Message, that means you lost.');

alert('Thanks for making it through all of this ' + name + '. Let us tally up the results...');

alert('You scored ' + (count * 100) / 5 + ' percent on the Questions Game.');

if (gameTwo ===1) {
    alert('You won the Single Guessing Game...')
} else{
    alert('You did not win the Single Guessing Game...')  
}

if (gameThree ===1) {
    alert('and you won the Multiple Guessing Game!')
} else{
    alert('and you did not win the Multiple Guess Game.')  
}