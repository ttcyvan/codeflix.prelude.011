function kebabCase(str = "") {
    //let teste = str.replace(/ /g, "-").replace(/[A-Z]/g, "-")


    teste = str.slice(1);


    //teste += str.replace(/[A-Z]/g, "-");
    return teste;
}
console.log(kebabCase("Love One cOde"))