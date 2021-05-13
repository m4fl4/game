import OpcaoJogadaUm from '../OpcoesJogada/OpcaoJogadaUm';
import OpcaoJogadaDois from '../OpcoesJogada/OpcaoJogadaDois';
import OpcaoJogadaTres from '../OpcoesJogada/OpcaoJogadaTreis';
import OpcaoJogadaQuatro from '../OpcoesJogada/OpcaoJogadaQuatro';
import OpcaoJogadaCinco from '../OpcoesJogada/OpcaoJogadaCinco';
import OpcaoJogadaSeis from '../OpcoesJogada/OpcaoJogadaSeis';
import OpcaoJogadaSeguida from '../OpcoesJogada/OpcaoJogadaSeguida';
import OpcaoJogadaFullHouse from '../OpcoesJogada/OpcaoJogadaFullHouse';
import OpcaoJogadaTrinca from '../OpcoesJogada/OpcaoJogadaTrinca';
import OpcaoJogadaQuadra from '../OpcoesJogada/OpcaoJogadaQuadra';
import OpcaoJogadaGeneral from '../OpcoesJogada/OpcaoJogadaGeneral';


class OpcaoJogadaFactory {

    createOpcao(opcao) {
        let op = null;
        switch (opcao) {
            case "1":
                op = new OpcaoJogadaUm();
                break;
            case "2":
                op = new OpcaoJogadaDois();
                break;
            case "3":
                op = new OpcaoJogadaTres();
                break;
            case "4":
                op = new OpcaoJogadaQuatro();
                break;
            case "5":
                op = new OpcaoJogadaCinco();
                break;
            case "6":
                op = new OpcaoJogadaSeis();
                break;
            case "seguida":
                op = new OpcaoJogadaSeguida();
                break;
            case "trinca":
                op = new OpcaoJogadaTrinca();
                break;
            case "quadra":
                op = new OpcaoJogadaQuadra();
                break;
            case "full-house":
                op = new OpcaoJogadaFullHouse();
                break;
            case "general":
                op = new OpcaoJogadaGeneral();
                break;
            default:
                break;
        }
        return op;
    }
}

export default OpcaoJogadaFactory;