import { trendsFeedGet } from "../../api/trendsFeedGet"
import { Trends } from "../../types/trendsTypes"

export const getTrends = async (): Promise<Trends> => {
	const response = await trendsFeedGet()
	if (typeof response.data === "string") {
		// eslint-disable-next-line unicorn/prefer-type-error
		throw new Error(response.data)
	}
	if (response.data.error) throw new Error(response.data.error)
	return response.data
}
