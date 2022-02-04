export const abbreviateNumber = (count: number): string | number => {
	return new Intl.NumberFormat("en-US", {
		notation: "compact",
		maximumFractionDigits: 1,
	}).format(count)
}
