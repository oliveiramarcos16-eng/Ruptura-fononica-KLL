export class Personagem{
    nome: string;
    vida: number;

    constructor(nome: string, vida: number){
        this.nome = nome
        this.vida = vida
    }
}

export class Lilly extends Personagem{
    
    
    atacar(){
        console.log("Lilly atacou!");
}
}

export class Kielop extends Personagem{
    
    atacar(){
        console.log("Kielop atacou!");
}
}

export class Inimigo extends Personagem{

        atacar(){
            console.log("Inimigo atacou!")
        }
}
