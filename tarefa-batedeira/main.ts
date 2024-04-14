
// type Batedor = "globo" | "leque" | "gancho" | "x";
interface Batedor {
    bater(): void
}
class BatedorGlobo implements Batedor {
    bater(): void {
        console.log("Com esse batedor eu posso fazer sorvete!");
    }
}

class BatedorLeque implements Batedor {
    bater(): void {
        console.log("Com esse batedor eu posso fazer biscoito!");
    }
}

class BatedorGancho implements Batedor {
    bater(): void {
        console.log("Com esse batedor eu posso fazer pão!");
    }
}

class BatedorX implements Batedor {
    bater(): void {
        console.log("Com esse batedor eu posso fazer x!");
    }
}
class BatedeiraPlanetaria {
    acessorio: Batedor;

    constructor(acessorio: Batedor) {
      this.acessorio = acessorio;
    }

    bater() {
      this.acessorio.bater();
    }
}
const ganchoAcessorio = new BatedorGancho();

const batedeira = new BatedeiraPlanetaria(ganchoAcessorio);
batedeira.bater(); 
