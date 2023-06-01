function capitalize(word) {
    const firstLetter = word.charAt(0).toUpperCase() + word.slice(1)

    return firstLetter
}

function reverseString(str) {
    const revString = str.split("").reverse().join('')
    return revString
}

console.log(reverseString('cat'))
export { capitalize, reverseString }