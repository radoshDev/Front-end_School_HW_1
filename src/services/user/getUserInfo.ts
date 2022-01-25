import { userInfoGet } from "api/userInfoGet"
import { UserInfo } from "types/usersTypes"

export const getUserInfo = async (username: string): Promise<UserInfo> => {
	const response = await userInfoGet(username)
	return response.data
}
