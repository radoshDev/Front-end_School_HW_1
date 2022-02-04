import { removeHashtagFromText } from "./removeHashtagFromText"

describe("#removeHashtagFromText", () => {
	it("should return empty string when passed only hashtags", () => {
		const mockData = "#test-data #test-2"
		expect(removeHashtagFromText(mockData)).toBe("")
	})
	it("should return string without hashtags when passed text and hashtags at the end", () => {
		const mockData = "some text #test-data #test-2"
		expect(removeHashtagFromText(mockData)).toBe("some text")
	})
	it("should return string without hashtags when passed text and hashtags at the start", () => {
		const mockData = "#test-data #test-2 some text"
		expect(removeHashtagFromText(mockData)).toBe("some text")
	})
	it("should return empty string when passed hashtags with German worlds", () => {
		const mockData = "#fürdich #test-2"
		expect(removeHashtagFromText(mockData)).toBe("")
	})
	it("should return empty string when passed hashtags with cyrillic worlds", () => {
		const mockData = "#привет #test-2"
		expect(removeHashtagFromText(mockData)).toBe("")
	})
})
