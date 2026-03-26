import { DoctorProfile, AttendantProfile } from "../models/index.js";

// Função auxiliar para obter o perfil profissional do usuário com base no cargo
export const getWorkerProfile = async (role, userId, transaction) => {
	const normalizedRole = role.toUpperCase();
	if (normalizedRole === "MEDICO") {
		return DoctorProfile.findOne({
			where: { userId },
			include: { association: "user", attributes: ["name", "email", "role"] },
			transaction,
		});
	}

	if (normalizedRole === "ATENDENTE") {
		return AttendantProfile.findOne({
			where: { userId },
			include: { association: "user", attributes: ["name", "email", "role"] },
			transaction,
		});
	}

	return null;
};
