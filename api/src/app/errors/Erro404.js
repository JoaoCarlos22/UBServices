import ErroBase from "./ErroBase.js";

class Erro404 extends ErroBase {
	constructor(message = "Recurso nao encontrado", details) {
		super(message, 404, details);
	}
}

export default Erro404;
