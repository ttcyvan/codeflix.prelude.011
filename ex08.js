+
function swapCase(str = '') {


    let resultat
    if (str.match(/([A-Z])/g)) {
        resultat = str.replace(/([A-Z])/g, )

    }
    if (str.match(/([a-z])/g)) {
        resultat = str.replace(/([a-z])/g, str)
    }
    return resultat
}

console.log(swapCase("One Code"))
console.log(swapCase("1237 Fruits"))