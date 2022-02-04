export const removeHashtagFromText = (text: string): string => {
	return text.replace(/\B#[^ ]+(?:\s|\b)/g, "").trim()
}
