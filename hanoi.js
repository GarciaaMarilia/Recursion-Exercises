function torres_de_hanoi(n, origem, destino, auxiliar) {
 if (n === 1) {
  console.log(`Mover disco 1 da vareta ${origem} para a vareta ${destino}`);
  return;
 }
  torres_de_hanoi(n - 1, origem, auxiliar, destino);
  console.log(`Mover disco ${n} da vareta ${origem} para a vareta ${destino}`);
  torres_de_hanoi(n - 1, auxiliar, destino, origem);
 
}

const n = 5;
torres_de_hanoi(n, "A", "C", "B");
