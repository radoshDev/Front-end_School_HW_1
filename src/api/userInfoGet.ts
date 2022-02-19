import { AxiosResponse } from "axios"
import { UserInfo } from "../types/usersTypes"
import { apiGet } from "./api"

export const USER_INFO_PATH = "/user-info.json"

export const userInfoGet = (username: string): Promise<AxiosResponse<UserInfo>> => {
	if (!username) throw new Error("User name not passed")
	return apiGet(USER_INFO_PATH)
}
