import Player from '../../models/Player';
import Turno from '../../models/Turno';

class PartidaDefault {
    id;
    tipo;
    players;
    turno;

    constructor() {
        this.tipo = "default";
        this.players = [new Player(), new Player()];
        this.players[0].setCor("Azul");
        this.players[1].setCor("Vermelho");
        this.turno = new Turno();
        this.turno.inicioRandom(this.players);
    }

    setId(id) {
        this.id = id;
    }
    getId() { 
        return this.id;
    }

    getTipo() {
        return this.tipo;
    }

    setPlayers(players) {
        this.players = players;
    }
    getPlayers() {
        return this.players;
    }

    setTurno(turno) {
        this.turno = turno;
    }
    getTurno() {
        return this.turno;
    }
}

export default PartidaDefault;