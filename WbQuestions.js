//find the character that occurs the most

let mostCommonLetter = function (str) {
    let max = 0
    maxChar = '';
    str.split.forEach(char => {
        if (char.split.length > max) {
            Max = str.split(char).length;
            maxChar = char
        }
    });
}

function mostCommonLetter(str) {
    let mostCommon = ''

    //pain don't need to do that
    //let letter= {a:0, b:0, c:0...}

    for (let i = 0; i < str.legnth; i++) {
        let char = str[i]

        //do this instead of writing all the letters out
        //to iterate over all the pertinent letters
        //if (!letters[char]) {
        //    letters[char] = 1
        //} else {
        //    letters[char]++
        //}
        //can also do
        letters[char] = letters[char] || 0
        letters[char]++
    }

    //move variables up under let char=str[i] and 
    //if statement under for loop to iterate over all the letters
    //and tracking is the largest
    let largest = 0
    let largestChar = ''
    for (let char in letters) {
        if (letters[char] > largest) {
            largest = letters[char]
            largestChar = char
        }
    }

    return largestChar
}