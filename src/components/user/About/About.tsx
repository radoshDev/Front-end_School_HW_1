import { FC } from "react"
import styled from "styled-components"
import { UserInfo } from "../../../types/usersTypes"
import Rectangle from "../../ui/Rectangle"
import VerifiedIcon from "../../ui/VerifiedIcon"

type Props = {
	isLoading?: boolean
	user: UserInfo["user"]
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
		color: ${p => p.theme.main.textColor};
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
