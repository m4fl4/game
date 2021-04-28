import opcaoJogadaFactory from './OpcoesJogada/OpcaoJogadaFactory';

class Missao {
    opcoes;
    pontuacao;

    constructor() {
        let opcaoFactory = new opcaoJogadaFactory();
        this.opcoes = [
            opcaoFactory.createOpcao("1"),
            opcaoFactory.createOpcao("2"),
            opcaoFactory.createOpcao("3"),
            opcaoFactory.createOpcao("4"),
            opcaoFactory.createOpcao("5"),
            opcaoFactory.createOpcao("6"),
            opcaoFactory.createOpcao("trinca"),
            opcaoFactory.createOpcao("seguida"),
            opcaoFactory.createOpcao("quadra"),
            opcaoFactory.createOpcao("full-house"),
            opcaoFactory.createOpcao("general"),
        ];
        this.pontuacao = 0;
    }
    
    setOpcoes(opcoes) {
        this.opcoes = opcoes;
    }
    getOpcoes() {
        return this.opcoes;
    }

    getPontuacao() {
        return this.pontuacao;
    }

    calculaPontuacao() {
        let pont = 0;
        this.opcoes.map(op => {
            if( op.getTipo() == "1" ||
                op.getTipo() == "2" ||
                op.getTipo() == "3" ||
                op.getTipo() == "4" ||
                op.getTipo() == "5" ||
                op.getTipo() == "6"
                ) 
            {
                pont += op.getTotal()
            } else {
                if(op.getTipo() == "trinca" && op.getTotal() == 1) {
                    pont += 20;
                } else if(op.getTipo() == "seguida" && op.getTotal() == 1) {
                    pont += 30;
                } else if(op.getTipo() == "full-house" && op.getTotal() == 1) {
                    pont += 40;
                } else if(op.getTipo() == "quadra" && op.getTotal() == 1) {
                    pont += 50;
                } else if(op.getTipo() == "general" && op.getTotal() == 1) {
                    pont += 100;
                }
            }
        })
        this.pontuacao = pont;
    }
}

export default Missao;