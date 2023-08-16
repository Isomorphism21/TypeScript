"use strict";
class Astronauta {
    /* public id: number;
    public nombre: string;
    public record: string; */
    constructor(id, nombre, _record, recompensa) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.recompensa = recompensa;
        /* this.id = id,
        this.nombre = nombre,
        this.record = record */
    }
    obtenerRecompensa(record) {
        if (record === "artemis") {
            this.recompensa = "GANO 5 millones";
        }
    }
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
}
//Vias Constructor
const astronauta1 = new Astronauta(1, "Iso", "Saturno", "ninguna");
console.log(astronauta1.nombre);
console.log(`Record ${astronauta1.record}`);
//Vias setter
astronauta1.record = "sol";
console.log(`record via setter de Iso: ${astronauta1.record}`);
//Ejercicio
astronauta1.obtenerRecompensa("artemis");
console.log(`Recompensa fue: ${astronauta1.recompensa}`);
