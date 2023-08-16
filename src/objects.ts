//object arrays

let goleadores:string[] = ["Jisas", "Amed", "Yedher"];
let goles:number[] = [0,5,-2];
let tirosEsquina:number[] = [];

console.log(`goleadores: ${goleadores}`);
console.log(`goles: ${goles}`);

//Metodo alternativo para definir arrays en typeScript;

let wareTherePenalties:Array<Boolean> = [false];
console.log(`There were penalties: ${wareTherePenalties}`);

//TypeScript infiere los metodos aplicables segun el tipo de dato

console.log(goles.map(ele => ele.toString()));

//Object 

let goleadoresId = [10, 7, 9];

goleadoresId.push(1);

console.log(goleadoresId);

goleadoresId.push(+"13");

console.log(typeof goleadoresId);