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
            pont += op.getTotal();
        })
        this.pontuacao = pont;
    }
}

export default Missao;