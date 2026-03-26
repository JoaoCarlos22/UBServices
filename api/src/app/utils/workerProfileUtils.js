import { DoctorProfile, AttendantProfile } from "../models/index.js";

// Função auxiliar para obter o perfil profissional do usuário com base no cargo
const getWorkerProfile = async (role, userId, transaction) => {
	if (role === "medico") {
		return DoctorProfile.findOne({
			where: { userId },
			include: { association: "user", attributes: ["name", "email", "role"] },
			transaction,
		});
	}

	if (role === "atendente") {
		return AttendantProfile.findOne({
			where: { userId },
			include: { association: "user", attributes: ["name", "email", "role"] },
			transaction,
		});
	}

	return null;
};
