import Avatar from "components/ui/Avatar"
import { FC } from "react"
import { MdAccountCircle } from "react-icons/md"
import { Link } from "react-router-dom"
import { User } from "types/usersTypes"

type Props = {
	isLoading: boolean
	user: User
}

const UserIcon: FC<Props> = ({ isLoading, user }) => {
	return isLoading ? (
		<MdAccountCircle size={40} />
	) : (
		<Link to={`/account/${user.uniqueId}`}>
			<Avatar altText={user.nickname} avatarUrl={user.avatarThumb} size={45} />
		</Link>
	)
}

export default UserIcon
