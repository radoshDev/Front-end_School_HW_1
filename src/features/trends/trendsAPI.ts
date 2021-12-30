import { Trends } from "types/trendsTypes"
import { API } from "utils/API"

export class TrendsAPI {
	static async getFeed() {
		const response = await API.get<Trends>("/trending/feed")
		return response.data
	}
}
