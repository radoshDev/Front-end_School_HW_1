import { AxiosResponse } from "axios"
import { UserInfo } from "types/usersTypes"
import { apiGet } from "./api"

export const USER_INFO_PATH = "/user/info/"

export const userInfoGet = (username: string): Promise<AxiosResponse<UserInfo>> => {
	return apiGet(`${USER_INFO_PATH}${username}`)
}
