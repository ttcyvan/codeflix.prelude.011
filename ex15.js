function count(str = '', substring) {
    let conpteur = 0
    tab = str.split(' ')
    for (element of tab) {
        if (substring === element) {
            conpteur++
        }
    }

    return conpteur
}
console.log(count("chopper merci merci", "merci"))