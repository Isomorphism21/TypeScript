class Centro{
    constructor(
        public direccion:string,
        public numero:number,
        public numeroCampers:number,
        public nombre:string,
        public ciudad:string
    ){}
}

class Ruta{
    constructor(
        public tecnologia:string,
        public trainer:string,
        public duracion:string,
        public complementos:string,
        public finalizado:string
    ){}
}

class Nivel{
    constructor(
        public nivel:string, 
    ){}
}

class Camper{
    constructor(
        public nombre:string,
        public edad:number,
        public CC:number,
        public participacion:string,
        public desempeño:string
    ){}
}

class Contrato{
    constructor(
        public tipo:string,
        public empresa:string,
        public internacional:string,
        public pago:string,
    ){}
}

//Creacion de Centros
const centro1 = new Centro("carrera 1", 3152589631, 20, "campus", "Bucaramanga");
const centro2 = new Centro("carrera 2", 3126578941, 30, "campis", "Medellin");
const centro3 = new Centro("carrera 3", 3105268791, 40, "campes", "Cali");
const centro4 = new Centro("carrera 4", 3256324879, 50, "campas", "Barranca");
const centro5 = new Centro("carrera 5", 3168795132, 60, "campos", "Monteria");

//Creacion de Rutas
const Ruta1 = new Ruta("HTML", "el de basico", "10 meses", "CSS", "Si");
const Ruta2 = new Ruta("NODE", "Vermen", "8 meses", "Express", "No");
const Ruta3 = new Ruta("JavaScript", "Vermen", "10 meses", "TypeScript", "Si");
const Ruta4 = new Ruta("Python", "Roy", "6 meses", "general", "Si");
const Ruta5 = new Ruta("MySql", "Miguel", "5 meses", "Sintax", "No");

//Creacion de Nivel
const Nivel1 = new Nivel()