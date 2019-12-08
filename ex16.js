function countWorlds(str = "", patternopt) {
    return str.replace(/[^a-zA-Z0-9]/g, "")
        .replace(/([A-Z])/g, " $1").trim().split(" ").length

}
console.log(countWorlds("Tony Tony Chopper"));
console.log(countWorlds("TonyTonyChopper"));
console.log(countWorlds("Tony Tony - Chopper"));