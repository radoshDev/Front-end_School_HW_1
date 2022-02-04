import { trendsFeedGet } from "../../api/trendsFeedGet"
import { Trends } from "../../types/trendsTypes"

export const getTrends = async (): Promise<Trends> => {
	const response = await trendsFeedGet()
	return response.data
}
