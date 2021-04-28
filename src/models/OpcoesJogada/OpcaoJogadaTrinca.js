class OpcaoJogadaTrinca {
    tipo;
    dados;
    total;
    controle;

    constructor() {
        this.tipo = "trinca";
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
        if(missao.getOpcoes()[6].getTotal() == 0) {
            missao.getOpcoes()[6].setTotal(this.total);
        }
    }

    bubbleSort(array) {
        let len = array.length;
        for(let i=0; i<len; i++) {
            for(let j=0; j<len-1; j++) {
                let valor1 = array[j].getNumero();
                let valor2 = array[j+1].getNumero();
                if(valor1 > valor2) {
                    let aux = array[j];
                    array[j] = array[j+1];
                    array[j+1] = aux;
                }
            }   
        }
        return array;
    }

    filtro(a) {
        let array = this.bubbleSort(a);
        let check = 0;
        let len = array.length;
        for(let i=0; i<len; i++) {
            for(let j=0; j<len-2; j++) {
                let valor1 = array[j].getNumero();
                let valor2 = array[j+1].getNumero();
                let valor3 = array[j+2].getNumero();
                if(valor1 == valor2 && valor2 == valor3) {
                    this.total = 20;
                    check = 1;
                }
            }   
        }
        if(check) {
            this.dados = a;
        }
        this.controle++;
    }
}

export default OpcaoJogadaTrinca;