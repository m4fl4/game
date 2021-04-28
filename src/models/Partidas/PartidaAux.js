import Player from '../Player';
import Turno from '../Turno';

class PartidaAux {
    id;
    tipo;
    players;
    turno;

    constructor() {
        this.tipo = "aux";
        this.players = [new Player(), new Player(), new Player()];
        this.players[0].setCor("Roxo");
        this.players[1].setCor("Rosa");
        this.players[2].setCor("Preto")
        this.turno = new Turno();
        this.turno.inicioRandom(this.players, this.players.length);
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

export default PartidaAux;