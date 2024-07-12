function contagemRecursiva(numeros) {
 if (numeros.length === 0) {
  return 0;
 }

 return 1 + contagemRecursiva(numeros.splice(1));
}

console.log(contagemRecursiva([5, 8, 9, 6, 45, 1, 8, 6, 2, 5]));
