import { AxiosResponse } from "axios"
import { Trends } from "types/trendsTypes"
import { apiGet } from "./api"

export const USER_FEED_URL = "/trending/feed"

export const userFeedGet = (): Promise<AxiosResponse<Trends>> => {
	return apiGet(USER_FEED_URL)
}
