class OpcaoJogadaQuatro {
    tipo;
    dados;
    total;
    controle

    constructor() {
        this.tipo = "4";
        this.dados = [];
        this.total = 0;
        this.controle = 0;
    }

    getTipo() {
        return this.tipo;
    }

    setDados(dados) {
        this.dados = dados;
    }
    getDados() {
        return this.dados;
    }

    setTotal(total) {
        this.total = total;
    }
    getTotal() {
        return this.total;
    }

    setControle(controle) {
        this.controle = controle;
    }
    getControle() {
        return this.controle;
    }

    atualizaMissao(missao) {
        if(missao.getOpcoes()[3].getTotal() == 0) {
            missao.getOpcoes()[3].setTotal(this.total);
        }
    }

    filtro(array) {
        array.map(d => {
            if(d.getNumero() == 4) {
                this.dados.push(d);
                this.total += d.getNumero();
            }
        })
        this.controle++;
    }
}

export default OpcaoJogadaQuatro;