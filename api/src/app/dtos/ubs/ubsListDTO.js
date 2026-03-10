import { ubsDTO } from "./ubsDTO.js";

export const ubsListDTO = (ubsList) => ({
	items: ubsList.map((ubs) => ubsDTO(ubs)),
	total: ubsList.length,
});
