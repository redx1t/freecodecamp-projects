function rot13(str) {

    let newArr = [];
    // convert str to arr, loops through each character, checks if its a - Z then fetches the cipher, if its an unique, it keeps it the same
    str.split("").forEach((character) => {
        character.match("[a-zA-Z]+") ? newArr.push(decipher(character)) : newArr.push(character);
    });
    // convert the arr to string  
    return newArr.join("");

}

// function to decipher a letter
function decipher(letter) {
    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";

    // finds the index of the letter on the alpha then translates that to the equivalent on the cipher

    return cipher.split("")[originalAlpha.split("").findIndex(listing => listing === letter)];


}

console.log(rot13("SERR PBQR PNZC"));
// FREE CODE CAMP
console.log(rot13("SERR YBIR?"));
// FREE LOVE?