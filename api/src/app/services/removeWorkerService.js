import { Op } from "sequelize";
import { UbsAdmin, UbsAttendant, UbsDoctor } from "../models/index.js";

export const removeWorkerService = async ({ profile, adminUbsIds }) => {
	return UbsAdmin.sequelize.transaction(async (transaction) => {
		if (profile.role.toUpperCase() === "MEDICO") {
			await UbsDoctor.destroy({
				where: {
					doctorProfileId: profile.id,
					ubsId: {
						[Op.in]: adminUbsIds,
					},
				},
				transaction,
			});
		}

		if (profile.role.toUpperCase() === "ATENDENTE") {
			await UbsAttendant.destroy({
				where: {
					attendantProfileId: profile.id,
					ubsId: {
						[Op.in]: adminUbsIds,
					},
				},
				transaction,
			});
		}
	});
};
