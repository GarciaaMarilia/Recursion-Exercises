function valorMaisAlto(numeros) {
 if (numeros.length === 2) {
  return numeros[0] > numeros[1] ? numeros[0] : numeros[1];
 }
 sub_max = valorMaisAlto(numeros.splice(1));

 return numeros[0] > sub_max ? numeros[0] : sub_max;
}

console.log(valorMaisAlto([2, 56, 7, 9]));
