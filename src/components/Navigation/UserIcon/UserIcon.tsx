import { ReactElement } from "react"
import { MdAccountCircle } from "react-icons/md"
import { Link } from "react-router-dom"
import { useTheme } from "styled-components"
import { UserInfo } from "../../../types/usersTypes"
import Avatar from "../../ui/Avatar"

type Props = {
	isLoading: boolean
	user: UserInfo
}

const UserIcon = ({ isLoading, user }: Props): ReactElement => {
	const isNotUserId = !user?.uniqueId
	const theme = useTheme()
	return isLoading || isNotUserId ? (
		<MdAccountCircle size={40} data-testid="account-circle" color={theme.main.textColor} />
	) : (
		<Link to={`/account/${user.uniqueId}`}>
			<Avatar altText={user.nickname} avatarUrl={user.avatarThumb} size={45} />
		</Link>
	)
}

export default UserIcon
