console.log(` ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** `);
console.log(`
CONVERSÂO DE CÓDIGO DNA PARA RNA `);
console.log(`_________________________________`);



let conjuntoDna = "ATGCCGAAATTTGCG"
let arrDna = conjuntoDna.split("")
arrDna.splice(0, 0, "U");
arrDna.splice(1, 1, "A");
arrDna.splice(2, 2, "C");
arrDna.splice(3, 3, "G");
arrDna.splice(4, 4, "G");
arrDna.splice(5, 5, "C");
arrDna.splice(6, 6, "U");
arrDna.splice(7, 7, "U");
arrDna.splice(8, 8, "U");
arrDna.splice(9, 9, "A");
arrDna.slice(10, 10, "A");
arrDna.splice(11, 11, "A");
arrDna.splice(12, 12, "C");
arrDna.splice(13, 13, "G");
arrDna.splice(14, 14, "C");
let arrRna = arrDna.join("");
console.log("                                                ");
console.log(`Realizando a Conversão do DNA: ${conjuntoDna}, em RNA teremos o seguinte resultado: ${arrRna}`);
console.log("                                                ");
console.log(` ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** `);