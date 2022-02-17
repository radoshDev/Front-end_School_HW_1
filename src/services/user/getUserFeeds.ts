import { userFeedGet } from "../../api/userFeedGet"
import { UserTrends } from "../../types/usersTypes"

export const getUserFeeds = async (userId: string): Promise<UserTrends> => {
	const response = await userFeedGet(userId)

	if (typeof response.data === "string") throw new Error(response.data)
	if (response.data.error) throw new Error(response.data.error)
	return response.data
}
