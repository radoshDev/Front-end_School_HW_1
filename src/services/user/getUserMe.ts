import { userMeGet } from "../../api/userMeGet"
import { User } from "../../types/usersTypes"

export const getUserMe = async (): Promise<User> => {
	const response = await userMeGet()
	return response.data.user
}
