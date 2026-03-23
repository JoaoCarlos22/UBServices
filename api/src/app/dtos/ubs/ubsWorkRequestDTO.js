import { removeNullish } from "../../utils/nullUtils.js";

export const ubsWorkRequestDTO = (ubsWorkRequest, ubs, profile) => {
	const requestData = ubsWorkRequest?.get
		? ubsWorkRequest.get({ plain: true })
		: ubsWorkRequest;

	const dto = removeNullish({
		id: requestData.id,
		workerRole: requestData.workerRole,
		status: requestData.status,
		message: requestData.message,
		adminMessage: requestData.adminMessage,
		createdAt: requestData.createdAt,
		reviewedAt: requestData.reviewedAt,
		ubs: {
			id: ubs?.id,
			name: ubs?.name,
			cnes: ubs?.cnes,
			city: ubs?.city,
			uf: ubs?.uf,
			address: ubs?.address,
			neighborhood: ubs?.neighborhood,
		},
		user: {
			id: profile?.id,
			name: profile?.user?.name,
			email: profile?.user?.email,
			role: profile?.user?.role,
		},
	});

	return dto;
};
