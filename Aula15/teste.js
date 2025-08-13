let a = [6, 8, 4];
a[1] = 7;
a.push(9);
a.sort();
/*
console.log(a);
console.log(`O primeiro valor do vetor é ${a[0]}`);
console.log(`O vetor tem ${a.length} posições`);
for (let pos = 0; pos < a.length; pos++) {
  console.log(`O valor ${a[pos]} está na posicao ${pos}`);
}*/

for (let pos in a) {
  //para cada POSicao em a
  console.log(`O valor ${a[pos]} está na posicao ${pos}`);
}
