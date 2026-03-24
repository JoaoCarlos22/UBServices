import { removeNullish } from "../../utils/nullUtils.js";

export const ubsWorkRequestDTO = (ubsWorkRequest, ubs, profile = null) => {
	const requestData = ubsWorkRequest?.get
		? ubsWorkRequest.get({ plain: true })
		: ubsWorkRequest;

	const dto = removeNullish({
		id: requestData.id,
		workerRole: requestData.workerRole,
		status: requestData.status,
		message: requestData.message,
		adminMessage: requestData?.adminMessage,
		createdAt: requestData.createdAt,
		reviewedAt: requestData.reviewedAt,
		ubs: {
			id: ubs?.id || requestData?.ubs?.id,
			name: ubs?.name || requestData?.ubs?.name,
			cnes: ubs?.cnes || requestData?.ubs?.cnes,
			city: ubs?.city || requestData?.ubs?.city,
			uf: ubs?.uf || requestData?.ubs?.uf,
			address: ubs?.address || requestData?.ubs?.address,
			neighborhood: ubs?.neighborhood || requestData?.ubs?.neighborhood,
		},
		requester:
			profile || requestData?.requester
				? {
						id: profile?.id || requestData?.requester?.id,
						name: profile?.user?.name || requestData?.requester?.name,
						email: profile?.user?.email || requestData?.requester?.email,
						role: profile?.user?.role || requestData?.requester?.role,
					}
				: undefined,
		reviewer: requestData?.reviewer
			? {
					id: requestData?.reviewer?.id,
					name: requestData?.reviewer?.name,
					email: requestData?.reviewer?.email,
				}
			: undefined,
	});

	return dto;
};
