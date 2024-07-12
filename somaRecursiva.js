function somaRecursiva(numeros) {
 if (numeros.length === 0) {
  return 0;
 }
return numeros[0] + somaRecursiva(numeros.splice(1));
}

console.log(somaRecursiva([2, 4, 6]));
