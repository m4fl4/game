import PartidaDefault from '../Partidas/PartidaDefault';

class PartidaFactory {
    
    createPartida(tipo) {
        let partida = null;
        switch (tipo) {
            case "default":
                partida = new PartidaDefault();
                break;
            default:
                break;
        }
        return partida;
    }

}

export default PartidaFactory;