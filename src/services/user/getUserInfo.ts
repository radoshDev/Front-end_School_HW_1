import { userInfoGet } from "../../api/userInfoGet"
import { UserInfo } from "../../types/usersTypes"

export const getUserInfo = async (username: string): Promise<UserInfo> => {
	const response = await userInfoGet(username)
	if (!response.data?.user?.uniqueId) throw new Error(JSON.stringify(response.data))
	return response.data
}
