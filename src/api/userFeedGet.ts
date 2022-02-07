import { AxiosResponse } from "axios"
import { UserTrends } from "../types/usersTypes"
import { apiGet } from "./api"

export const USER_FEED_URL = "/user/feed"

export const userFeedGet = (userId: string): Promise<AxiosResponse<UserTrends>> => {
	return apiGet(`${USER_FEED_URL}/${userId}`)
}
