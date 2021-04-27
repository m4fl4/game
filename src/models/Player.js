class Player {
    
    nome;
    cor;

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
}

export default Player;