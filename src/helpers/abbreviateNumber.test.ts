import { abbreviateNumber } from "./abbreviateNumber"

describe("#abbreviateNumber", () => {
	it("should return without abbreviation", () => {
		expect(abbreviateNumber(100)).toBe("100")
		expect(abbreviateNumber(0)).toBe("0")
		expect(abbreviateNumber(999)).toBe("999")
	})
	it("should return with K abbreviation", () => {
		expect(abbreviateNumber(1000)).toBe("1K")
		expect(abbreviateNumber(9999)).toBe("10K")
		expect(abbreviateNumber(9500)).toBe("9.5K")
	})
	it("should return with B abbreviation", () => {
		expect(abbreviateNumber(1_000_000_000)).toBe("1B")
	})
	it("should return with 1 fraction number", () => {
		expect(abbreviateNumber(1560)).toBe("1.6K")
	})
})
