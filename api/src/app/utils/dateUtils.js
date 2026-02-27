export const normalizeDateOnly = (value) => {
	if (!value) return null;

	// aceita já no formato YYYY-MM-DD
	if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;

	// aceita DD/MM/YYYY
	if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
		const [dd, mm, yyyy] = value.split("/");
		return `${yyyy}-${mm}-${dd}`;
	}

	// fallback
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return null;
	return date.toISOString().slice(0, 10);
};
