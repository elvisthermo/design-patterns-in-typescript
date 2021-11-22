class Frete {
  private strategy!: Strategy; //Strategy

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  public calcularEnvio(): string {
    return this.strategy.calcular();
  }
}

interface Strategy {
  calcular(): string;

  calcular(prime: boolean): string;
}

class AliExpress implements Strategy {
  calcular(): string {
    //calculos
    return "$10,00";
  }
}

class Amazon implements Strategy {
  calcular(): string {
    //calculos
    return "$02,00";
  }
}

class Correios implements Strategy {
  calcular(): string {
    //calculos
    return "$12,99";
  }
}

let ali = new AliExpress();
let correios = new Correios();
let prime = new Amazon();

const frete = new Frete();

frete.setStrategy(ali);
console.log("envio aliexpress:"+frete.calcularEnvio());

frete.setStrategy(correios);
console.log("envio correios:"+frete.calcularEnvio());

frete.setStrategy(prime);
console.log("envio amazon prime"+frete.calcularEnvio());

