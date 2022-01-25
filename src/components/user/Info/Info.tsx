import { FC } from "react"
import styled from "styled-components/macro"
import { User } from "types/usersTypes"
import Avatar from "components/ui/Avatar"
import About from "../About"

type Props = {
	isLoading: boolean
	user: User
}

const Info: FC<Props> = ({ isLoading, user }) => {
	return (
		<S.Info>
			<Avatar
				avatarUrl={user.avatarMedium}
				altText={user.nickname}
				size={150}
				isLoading={isLoading}
			/>
			<About user={user} isLoading={isLoading} />
		</S.Info>
	)
}

const S = {
	Info: styled.div`
		display: grid;
		grid-template-columns: minmax(100px, 150px) 1fr;
		column-gap: 1.5rem;
		margin-top: 2rem;
	`,
}

export default Info
