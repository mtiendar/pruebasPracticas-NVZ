// *Escribir una función que aplane los arreglos en un nivel

const arr = [[1, 2], [[3, 4]], [1, []]]
// *Resultado esperado 
// * [1, 2, [3, 4], 1, []]

const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const d = flatten(arr)
console.log(d);