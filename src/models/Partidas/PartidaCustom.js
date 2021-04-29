import Player from '../Player';
import Turno from '../Turno';

class PartidaCustom {
    id;
    tipo;
    players;
    turno;

    constructor(players) {
        this.tipo = "custom";
        this.players = players;
        this.turno = new Turno();
        this.turno.setPlayers(this.players);
        this.turno.inicioRandom(this.players);
        this.turno.geraTurnos();
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

    geraTurnos() {
        this.turno.total[0] = (this.getPlayers().length * 11);
    }

    bubbleSort(array) {
        let len = array.length;
        for(let i=0; i<len; i++) {
            for(let j=0; j<len-1; j++) {
                let valor1 = array[j].getMissao().getPontuacao();
                let valor2 = array[j+1].getMissao().getPontuacao();
                if(valor1 > valor2) {
                    let aux = array[j];
                    array[j] = array[j+1];
                    array[j+1] = aux;
                }
            }   
        }
        return array;
    }

    vencedor() {
        this.setPlayers(this.getTurno().getPlayers());
        let playersOrdenados = this.bubbleSort(this.getPlayers());
        return playersOrdenados[playersOrdenados.length-1];
    }
}

export default PartidaCustom;