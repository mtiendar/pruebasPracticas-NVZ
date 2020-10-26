// *Iterando un arreglo solo una vez escribir una función que elimine los "undefined, false y los null"

const clean = (arr) => arr.reduce((acc, el) => {
    if(el){
        acc.push(el)
    }
    return acc
},[])

const c = clean([1, undefined, null, 0, 2, 3])
console.log(c);