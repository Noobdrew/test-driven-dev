function capitalize(word) {
    const firstLetter = word.charAt(0).toUpperCase() + word.slice(1)

    return firstLetter
}

function reverseString(str) {
    const revString = str.split("").reverse().join('')
    return revString
}

const calculator = {
    add(a, b) {
        return a + b
    },
    subtract(a, b) {
        return a - b
    },
    divide(a, b) {
        return a / b
    },
    multiply(a, b) {
        return a * b
    }
}

function caesar(word, factor) {
    if (factor < 0) {
        return caesar(word, factor + 26)
    }
    let output = ''
    for (let char of word) {

        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0)
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + factor) % 26) + 65)
            }
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + factor) % 26) + 97)
            }
        }
        output += char
    }
    console.log(output)
    return output
};

Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

Array.prototype.min = function () {
    return Math.min.apply(null, this);
};

function analyze(arr) {
    const sum = arr.reduce((prev, curr) => prev + curr, 0)
    const average = sum / arr.length

    return {
        average: average,
        min: arr.min(),
        max: arr.max(),
        length: arr.length
    }
}

console.log(analyze([1, 2, 3]))


export { capitalize, reverseString, calculator, caesar, analyze }