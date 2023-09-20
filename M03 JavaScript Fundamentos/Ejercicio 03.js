/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (5 === 8 ){
      return false;
   }else{
      return true;
   }

}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:

   if ('jose' && 'carlos' == length()) {

      return true;
      
   }else{

     return false;
   }
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:

   if (num < 90) {
      
      return true;
   }else{
      
      return false
   }
   
   
}

var num = menosQueNoventa(70);



function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50) {
      
      return true;

   }else{
      
      return false
   }
}

var num = mayorQueCincuenta(55);




function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:

   if (num % 2 === 0) {
      
      return true;
   }else{

      return false;
   }

}

var num = esPar(9);





function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:

   if (num % 3 === 1) {
      
      return true;
   }else{

      return false;
   }
}

var num = esPar(9);



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
