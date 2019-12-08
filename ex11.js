function firt(str = "", len = 1) {

    if (len > str.length) {
        return str
    } else {

        let resultat = str.substr(str.length - len) // pour commencer en enlever dans le sens contraire
        return resultat
    }

}

console.log(firt('chopper'))
console.log(firt('chopper', 2))
console.log(firt('tony', 5))