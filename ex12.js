function substr(str = "", start, len = str.endOfString) {
    return str.substr(start, len)

}

console.log(substr("tony tony chopper", 10))
console.log(substr("chopper", 2, 2))