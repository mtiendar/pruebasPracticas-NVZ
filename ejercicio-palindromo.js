// *Verificar si una palabra es un palíndromo 
// ?Palabra que se lee igual al derecho que al revés 

const isPalindrome = (str) =>{
    str = str.replace(/\s/g, '')
    const lowered = str.toLowerCase()
    const splitted = lowered.split('')
    const  reversed = splitted.reverse()
    const joined = reversed.join('')
    return lowered == joined
}

const f = isPalindrome('Do geese see God')
console.log(f);