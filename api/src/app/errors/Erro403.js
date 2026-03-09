import ErroBase from "./ErroBase.js";

class Erro403 extends ErroBase {
	constructor(message = "Acesso negado", details) {
		super(message, 403, details);
	}
}

export default Erro403;
