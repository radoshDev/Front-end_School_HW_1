import { FC } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ROUTES } from "../../../pages/router"
import VerifiedIcon from "../../ui/VerifiedIcon"

export type UserSignProps = {
	authorName: string
	isAuthorVerified: boolean
	authorNickname: string
}

const UserSign: FC<UserSignProps> = ({ authorName, isAuthorVerified, authorNickname }) => {
	return (
		<S.UserSign>
			<Link className="name" to={`${ROUTES.account}/${authorName}`}>
				{authorName}
			</Link>
			{isAuthorVerified && <VerifiedIcon size={20} />}
			<Link className="nickname" to={`${ROUTES.account}/${authorName}`}>
				{authorNickname}
			</Link>
		</S.UserSign>
	)
}

const S = {
	UserSign: styled.div`
		.name {
			font-size: 1.125rem;
			font-weight: bold;
			margin-right: 0.25rem;
		}
		.nickname {
			font-size: 0.875rem;
		}
		svg {
			margin-right: 0.25rem;
			vertical-align: sub;
		}
	`,
}

export default UserSign
