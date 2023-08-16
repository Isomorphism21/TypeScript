"use strict";
class Centro {
    constructor(direccion, numero, numeroCampers, nombre, ciudad) {
        this.direccion = direccion;
        this.numero = numero;
        this.numeroCampers = numeroCampers;
        this.nombre = nombre;
        this.ciudad = ciudad;
    }
}
class Ruta {
    constructor(tecnologia, trainer, tiempo, complementos, finalizado) {
        this.tecnologia = tecnologia;
        this.trainer = trainer;
        this.tiempo = tiempo;
        this.complementos = complementos;
        this.finalizado = finalizado;
    }
}
class Nivel {
    constructor(nivel) {
        this.nivel = nivel;
    }
}
class Camper {
    constructor(nombre, edad, CC, participacion, desempeño) {
        this.nombre = nombre;
        this.edad = edad;
        this.CC = CC;
        this.participacion = participacion;
        this.desempeño = desempeño;
    }
}
class Contrato {
    constructor(tipo, empresa, internacional, pago) {
        this.tipo = tipo;
        this.empresa = empresa;
        this.internacional = internacional;
        this.pago = pago;
    }
}
const centro1 = new Centro("carrera 1", 315258963, 20, "campus", "Bucaramanga");
console.log(centro1);
