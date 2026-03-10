import { Op } from "sequelize";
import { Ubs } from "../models/index.js";
import { ubsListDTO } from "../dtos/ubs/ubsListDTO.js";

class UbsController {
	async search(req, res, next) {
		try {
			const { query, uf } = req.query;
			const where = {};

			if (uf) {
				where.uf = String(uf).trim().toUpperCase();
			}

			if (query) {
				const term = `%${String(query).trim()}%`;
				where[Op.or] = [
					{ name: { [Op.iLike]: term } },
					{ city: { [Op.iLike]: term } },
					{ neighborhood: { [Op.iLike]: term } },
					{ address: { [Op.iLike]: term } },
					{ services: { [Op.overlap]: [query] } },
				];
			}

			const ubsList = await Ubs.findAll({
				where,
				limit: 20,
				order: [["name", "ASC"]],
			});

			return res.status(200).json({
				...ubsListDTO(ubsList),
			});
		} catch (e) {
			return next(e);
		}
	}
}

export default new UbsController();
