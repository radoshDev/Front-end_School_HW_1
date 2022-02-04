import { ReactElement } from "react"
import { MdAccountCircle } from "react-icons/md"
import { Link } from "react-router-dom"
import { User } from "../../../types/usersTypes"
import Avatar from "../../ui/Avatar"

type Props = {
	isLoading: boolean
	user: User
}

const UserIcon = ({ isLoading, user }: Props): ReactElement => {
	const isNotUserId = !user.uniqueId
	return isLoading || isNotUserId ? (
		<MdAccountCircle size={40} data-testid="account-circle" />
	) : (
		<Link to={`/account/${user.uniqueId}`}>
			<Avatar altText={user.nickname} avatarUrl={user.avatarThumb} size={45} />
		</Link>
	)
}

export default UserIcon
