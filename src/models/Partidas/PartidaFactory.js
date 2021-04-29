import Partida2P from '../Partidas/Partida2P';
import Partida4P from './Partida4P';
import Partida8P from './Partida8P';
import PartidaCustom from './PartidaCustom';
import PartidaTeste from './PartidaTeste';

class PartidaFactory {
    
    createPartida(tipo) {
        let partida = null;
        switch (tipo) {
            case "teste":
                partida = new PartidaTeste();
                break;
            case "custom":
                partida = new PartidaCustom();
                break;
            case "2P":
                partida = new Partida2P();
                break;
            case "4P":
                partida = new Partida4P();
                break;
            case "8P":
                partida = new Partida8P();
                break;
            default:
                break;
        }
        return partida;
    }

}

export default PartidaFactory;