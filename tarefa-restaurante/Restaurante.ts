import Bebida from "./Bebida";
import Cozinha from "./Cozinha";
import Limpeza from "./Limpeza";
import Organizacao from "./Organizacao";
import Pedido from "./Pedido";


const pedido = new Pedido();
const organizacao = new Organizacao();
const limpeza = new Limpeza();
const cozinha = new Cozinha();
const bebida = new Bebida();


organizacao.organizarMesas();
cozinha.cozinharPratoPrincipal();
pedido.anotarPedido();
limpeza.limpar();
cozinha.prepararSobremesa();
bebida.servirBebidas();


 


  