/*
Pig Latin
*/

function pig_latin() {
    "use strict";
    var w = document.getElementById("word").value;
    var w2 = igpayAtinlay(w);
    document.getElementById("piglatinTranslated").textContent = "Your text in Pig Latin is: " + w2;
}

function igpayAtinlay(str) {
    var returnArray = [],
        wordArray = str.split(' ');

    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        var beginning = word.charAt(0);

        if (/[aeiouAEIOU]/.test(beginning)) {
            returnArray.push(word += 'way');
            continue;
        }

        for (var ii = 1; ii < word.length; ii++) {
            if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
                break;
            } else {
                beginning += word.charAt(ii);
            }
        }

        returnArray.push(word.substr(beginning.length) + beginning + 'ay');
    }
    return returnArray.join(' ');
}

console.log(igpayAtinlay("pizza")); // "izzapay"
console.log(igpayAtinlay("apple")); // "appleway"
console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"