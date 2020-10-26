// *Obtener el número mayor en un arreglo, pero iterando dicho arreglo solo una vez :)

const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b = getBiggest([50, -1500, 5000, 0, 1, 54])
console.log(b);