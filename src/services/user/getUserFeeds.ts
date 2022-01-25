import { userFeedGet } from "api/userFeedGet"
import { Trends } from "types/trendsTypes"

export const getUserFeeds = async (): Promise<Trends> => {
	const response = await userFeedGet()
	return response.data
}
