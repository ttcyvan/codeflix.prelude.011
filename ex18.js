function indexof(str = "", search, fronIndexopt = str.length - 1) {
    return str.lastIndexOf(search)
}
console.log(indexof("ch0pper", "p"))
console.log(indexof("ch0pper", "o"))