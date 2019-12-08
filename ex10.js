function firt(str = "", len = 1) {


    let resultat = str.substr(0, len)
    return resultat
}

console.log(firt('chopper'))
console.log(firt('chopper', 2))
console.log(firt('tony', 5))