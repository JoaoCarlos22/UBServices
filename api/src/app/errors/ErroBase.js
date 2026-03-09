class ErroBase extends Error {
	constructor(message = "Erro interno do servidor", status = 500, details) {
		super(message);
		this.name = this.constructor.name;
		this.status = status;
		this.details = details;
	}
}

export default ErroBase;
