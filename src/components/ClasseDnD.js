export class ClasseDnd {
    constructor(nome, hp) {
      this.nome = nome;
      this.hp = hp;
    }
  
    resumo() {
      return `${this.nome} - Dado de Vida: d${this.hp}`;
    }
  }
  