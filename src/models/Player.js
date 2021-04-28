import Missao from '../models/Missao';

class Player {
    id;
    nome;
    cor;
    missao;

    constructor() {
        this.nome = "";
        this.cor = "";
        this.missao = new Missao();
    }

    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }

    setNome(nome) {
        this.nome = nome;
    }  
    getNome() {
        return this.nome;
    }  

    setCor(cor) {
        this.cor = cor;
    }
    getCor() {
        return this.cor;
    }

    setMissao(missao) {
        this.missao = missao;
    }
    getMissao() {
        return this.missao;
    }
}

export default Player;