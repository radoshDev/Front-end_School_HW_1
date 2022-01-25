import Rectangle from "components/ui/Rectangle"
import VerifiedIcon from "components/ui/VerifiedIcon"
import { FC } from "react"
import styled from "styled-components"
import { User } from "types/usersTypes"

type Props = {
	isLoading?: boolean
	user: User
}

const About: FC<Props> = ({ isLoading, user }) => {
	return (
		<S.About>
			{isLoading ? (
				<Rectangle width={150} height={50} />
			) : (
				<>
					<h1>
						{user.uniqueId}
						{user.verified ? <VerifiedIcon size={28} /> : ""}
					</h1>
					<h4>{user.nickname}</h4>
					<p className="biography">{user.signature}</p>
				</>
			)}
		</S.About>
	)
}

const S = {
	About: styled.div`
		h1 {
			svg {
				vertical-align: middle;
				margin-left: 0.4rem;
			}
		}
		.biography {
			margin: 1rem 0;
		}
	`,
}

export default About
