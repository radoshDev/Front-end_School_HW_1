import { AxiosResponse } from "axios"
import { Trends } from "../types/trendsTypes"
import { apiGet } from "./api"

export const TREND_FEED_URL = "feed.json"

export const trendsFeedGet = (): Promise<AxiosResponse<Trends>> => {
	return apiGet(TREND_FEED_URL)
}
