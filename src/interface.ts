interface Song {
    id: number,
    name: string,
    year?: number
}

const oceanos:Song = {
    id:0,
    name: "oceans",
    year: 1990
}

const rios:Song = {
    id:2,
    name: "rivers",
    year: 2013
}

const objeto:{
    id:number,
    nombre: string,
    edad: number,
    sueldo?: number
} = {
    id: 0,
    nombre: "jisas",
    edad: 10
}

objeto.edad = 11

console.log(oceanos.name);
console.log(rios.id);
console.log(objeto.edad);