function convert(str = "", resToLoweropt = false) {

    if (resToLoweropt = true) {
        let maj = str.toUpperCase().slice(0, 1)
        let min = str.toLowerCase().substr(1)
        return `${maj}${min}`
    } else {
        let maj = str.toUpperCase().slice(0, 1)
        let min = str.substr(1)
        return `${maj}${min}`

    }


}

console.log(convert("one Code"));

console.log(convert("One CODE", true));