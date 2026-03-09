import ErroBase from "./ErroBase.js";

class Erro400 extends ErroBase {
	constructor(message = "Requisicao invalida", details) {
		super(message, 400, details);
	}
}

export default Erro400;
