import { userMeGet } from "../../api/userMeGet"
import { UserInfo } from "../../types/usersTypes"

export const getUserMe = async (): Promise<UserInfo> => {
	const response = await userMeGet()
	if (!response.data?.uniqueId) throw new Error(JSON.stringify(response.data))
	return response.data
}
