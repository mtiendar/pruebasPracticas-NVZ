// *Como multiplicar dos numeros sin el signo de multiplicación 

const multiply = (a, b) =>{
   let resultado = 0;
   const positivo = Math.abs(b) == b
   for(i = 0; i < Math.abs(b); i++){
       resultado = positivo ? resultado + a : resultado - a
   }
   return resultado
}

const a = multiply(5, 5)
console.log(a);