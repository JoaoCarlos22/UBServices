import { removeNullish } from "../../utils/nullUtils.js";
import { ubsWorkRequestDTO } from "./ubsWorkRequestDTO.js";

export const ubsListWorkRequestDTO = (ubsWorkRequests) => ({
	items: ubsWorkRequests.map((ubsWorkRequest) =>
		ubsWorkRequestDTO(ubsWorkRequest),
	),
	total: ubsWorkRequests.length,
});
