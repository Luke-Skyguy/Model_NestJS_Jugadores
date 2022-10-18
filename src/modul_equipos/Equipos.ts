class equipos {
    nom_equipo:string;
    jugadores:number;
    puntos_temporada:number;

    constructor(params: equipos) {
    if(params){
        Object.keys(params).forEach((key) => (this[key]= params[key]))
    }
    }


}