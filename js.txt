'use strict';


function question() {

    var name = prompt('What\'s your name?');
    alert('Hi ' + name + '! Please Answer the Following Questions in a Yes/No Format');
    console.log('User Name: ' + name);

    var aFirst = prompt('I was born in Seattle?').toLowerCase();
    console.log('User Answer #1 - Seattle: ' + aFirst);

    var aSec = prompt('I served in the Navy for five years?').toLowerCase();
    console.log('User Answer #2 - Navy: ' + aSec);

    var aThird = prompt('I lived in San Diego for two years?').toLowerCase();
    console.log('User Answer #3 - San Diego: ' + aThird);

    var aFourth = prompt('I have a degree in Bio Engineering?').toLowerCase();
    console.log('User Answer #4 - Bio Engineering: ' + aFourth);

    var aFifth = prompt('I am an only child?').toLowerCase();
    console.log('User Answer #5 - Only Child: ' + aFifth);

    var count = 0;

    var ansy = 'y';
    var ansyes = 'yes';
    var ansn = 'n';
    var ansno = 'no';

    var truestatement = 'You Got the Question Right!';
    var falsestatement = 'You Got the Question Wrong!';
    var nullstatement = 'You did not answer in the required format. Minus one point :(';

    if(aFirst==ansn || aFirst==ansno) {
        document.getElementById('responseone').innerHTML = 'You answered NO to the first question.' + truestatement;
        count++;
    } else if (aFirst==ansy || aFirst==ansyes) {
        document.getElementById('responseone').innerHTML = 'You answered YES to the first question.' + falsestatement;
    } else {
        document.getElementById('responseone').innerHTML = nullstatement;
    }

    if(aSec==ansn || aSec==ansno) {
        document.getElementById('responsetwo').innerHTML = 'You answered NO to the second question.' + truestatement;
        count++;
    } else if (aSec==ansy || aSec==ansyes) {
        document.getElementById('responsetwo').innerHTML = 'You answered YES to the second question.' + falsestatement;
    } else {
        document.getElementById('responsetwo').innerHTML = nullstatement;
    }

    if(aThird==ansn || aThird==ansno) {
        document.getElementById('responsethree').innerHTML = 'You answered NO to the third question.' + falsestatement;
    } else if (aThird==ansy || aThird==ansyes) {
        document.getElementById('responsethree').innerHTML = 'You answered YES to the third question.' + truestatement;
        count++;
    } else {
        document.getElementById('responsethree').innerHTML = nullstatement;
    }

    if(aFourth==ansn || aFourth==ansno) {
        document.getElementById('responsefour').innerHTML = 'You answered NO to the fourth question.' + truestatement;
        count++;
    } else if (aFourth==ansy || aFourth==ansyes) {
        document.getElementById('responsefour').innerHTML = 'You answered YES to the fourth question.' + falsestatement;
    } else {
        document.getElementById('responsefour').innerHTML = nullstatement;
    }

    if(aFifth==ansn || aFifth==ansno) {
        document.getElementById('responsefive').innerHTML = 'You answered NO to the fifth question.' + falsestatement;
    } else if (aFifth==ansy || aFifth==ansyes) {
        document.getElementById('responsefive').innerHTML = 'You answered YES to the fifth question.' + truestatement;
        count++;
    } else {
        document.getElementById('responsefive').innerHTML = nullstatement;
    }

    document.getElementById('finaltally').innerHTML = 'You scored '+ (count*100)/5 + ' percent.';


}
