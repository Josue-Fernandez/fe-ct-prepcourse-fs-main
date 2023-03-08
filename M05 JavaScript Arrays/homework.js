/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   var primero = array.shift();
   return primero;
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.

   //return array[array.length -1];

   var ultimo = array.pop();
   return ultimo;

}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.

   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
 
   var masUno = array.map((num)=>
   
   {
      return (num+1);
   });

   return masUno;



}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.

   // Retorna el arreglo.

  array.push(elemento);
  return array;

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   
   var oracion = palabras.join(' ');
   return oracion;

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   
   var verify = array.includes(elemento);
  if (verify===true){
   return true
}else{
   return false
}

}


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   res=0

   for(i=0; i<arrayOfNums.length; i++){
      res= res+arrayOfNums[i];
   }return res

   }

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   prom=0
   for(i=0; i<resultadosTest.length; i++){
      prom=prom+resultadosTest[i];
   }return prom/resultadosTest.length;

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.

   return Math.max(...arrayOfNums);
  
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
   // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
   // Escribe tu código aquí:
   
   if(arguments.length===0) return 0;
   if(arguments.length===1) return arguments[0];
   var res = 1;
   for(i=0; i<arguments.length; i++){
      if(arguments.length>1){
         res = res*arguments[i];
      }
   }return res;

   }

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   var array2 = [];

for(i=0; i<array.length; i++){
   if(array[i]>18){
      array2.push(array[i]);
   }
} return array2.length;

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

  

   if(numeroDeDia>1&&numeroDeDia<7){
      return "Es dia laboral";
   }
   else if(numeroDeDia===7||numeroDeDia===1){
      return "Es fin de semana";
   }

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   // Convertimos a "num" en String y lo dividimos en elementos de un arreglo.
  const resp = num.toString().split('');
  // Recorremos el arreglo y filtramos si hay un "9" en la posición 0.
  const newResp = resp.filter(iterator => iterator[0] === '9');

 // Si encuentra el "9" en la posición 0, retornará "true".
  if (newResp[0] === '9') {
    return true;
  } else {
    return false;
  }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   for(i=0; i<array.length; i++){
      if(array[i]===array[i+1]){
         return true
      }else{
         return false
      }
   }

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
 

   const nuevoarray =[];
   var msj = 'No se encontraron los meses pedidos'



   array.forEach(element => {
      if(element ==='Enero' || element ==='Marzo'|| element ==='Noviembre'){
         nuevoarray.push(element);
      }

   });
   
   if(nuevoarray.length<3){
      return msj
   }
   return nuevoarray
 
   
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   
   const nuevo = [];
   var digito = 6;
   for(i=0; i<=10; i++){
      
         nuevo.push(digito*[i]);
   }return nuevo

}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   const resultado = [];

   for(i=0; i<array.length; i++){
      if(array[i]>100){
         resultado.push(array[i]);
      }
   }return resultado



}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   const arreglonuevo =[];

   for(i=0; i=num.length; i+2;){
      
   }

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
