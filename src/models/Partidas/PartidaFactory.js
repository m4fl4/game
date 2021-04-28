import PartidaDefault from '../Partidas/PartidaDefault';
import PartidaAux from '../Partidas/PartidaAux';

class PartidaFactory {
    
    createPartida(tipo) {
        let partida = null;
        switch (tipo) {
            case "default":
                partida = new PartidaDefault();
                break;
            case "aux":
                partida = new PartidaAux();
                break;
            default:
                break;
        }
        return partida;
    }

}

export default PartidaFactory;