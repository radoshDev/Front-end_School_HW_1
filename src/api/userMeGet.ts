import { AxiosResponse } from "axios"
import { UserInfo } from "../types/usersTypes"
import { apiGet } from "./api"

export const USER_ME_PATH = "user/info/dave.xp"

export const userMeGet = (): Promise<AxiosResponse<UserInfo>> => {
	return apiGet(USER_ME_PATH)
}
