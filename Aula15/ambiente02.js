let verificar = [5, 8, 2];
verificar.push("mamaco");
/*
for (let passo = 0; passo < verificar.length; passo++) {
  console.log(`a posição ${passo} tem os valores ${verificar[passo]}`);
}
  */
for (let pos in verificar) {
  console.log(`a posição ${pos} tem os valores ${verificar[pos]}`);
}
