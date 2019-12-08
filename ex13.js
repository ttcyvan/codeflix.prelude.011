function slice(str = '', start, endopt = str.length) {
    if (endopt >= str) {
        return str
    } else {

        return str.substr(start, endopt)
    }

}

console.log(slice('chopper', 1))
console.log(slice('chopper', -4))
console.log(slice('chopper', 1, 3))