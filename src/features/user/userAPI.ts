import { API } from "utils/API"
import { Trends } from "types/trendsTypes"
import { User, UserInfo } from "types/usersTypes"

export class UserAPI {
	static async auth(): Promise<User> {
		const response = await API.get("user/info/dave.xp")

		if (response.data.code === 1) {
			throw new Error("Can not authenticate user! Please retry later")
		}

		return response.data.user
	}

	static async getInfo(userId = "dave.xp"): Promise<UserInfo> {
		const response = await API.get(`/user/info/${userId}`)

		if (response.data.code === 1) {
			throw new Error("Can not download user info! Please retry later")
		}
		return response.data
	}

	static async getFeed(): Promise<Trends> {
		const response = await API.get("/trending/feed")

		if (response.data.code === 1) {
			throw new Error("Download Videos Failed!!! Please retry later")
		}

		return response.data
	}
}
