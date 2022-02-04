import { Trends } from "types/trendsTypes"
import { API } from "utils/API"

export class TrendsAPI {
	static async getFeed(): Promise<Trends> {
		const response = await API.get<Trends>("/trending/feed")
		return response.data
	}
}
