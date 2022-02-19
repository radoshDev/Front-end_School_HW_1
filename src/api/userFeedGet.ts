import { AxiosResponse } from "axios"
import { UserTrends } from "../types/usersTypes"
import { apiGet } from "./api"

export const USER_FEED_URL = "user-feed.json"

export const userFeedGet = (userId: string): Promise<AxiosResponse<UserTrends>> => {
	if (!userId) throw new Error("User ID not passed")
	return apiGet(USER_FEED_URL)
}
