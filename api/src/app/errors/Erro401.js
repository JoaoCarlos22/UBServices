import ErroBase from "./ErroBase.js";

class Erro401 extends ErroBase {
	constructor(message = "Nao autorizado", details) {
		super(message, 401, details);
	}
}

export default Erro401;
