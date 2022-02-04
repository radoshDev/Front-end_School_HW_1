import { FC } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"
import { removeHashtagFromText } from "../../../helpers/removeHashtagFromText"
import { Hashtag } from "../../../types/trendsTypes"
import Avatar from "../../ui/Avatar"
import Hashtags from "../../ui/Hashtags"
import UserSign from "../UserSign"

export type HeaderProps = {
	avatarUrl: string
	authorName: string
	authorNickname: string
	description: string
	isAuthorVerified: boolean
	hashtags: Hashtag[]
}

const Header: FC<HeaderProps> = props => {
	const { avatarUrl, authorName, authorNickname, description, isAuthorVerified, hashtags } = props

	return (
		<S.Header>
			<Link to={`account/${authorName}`}>
				<Avatar avatarUrl={avatarUrl} altText={authorName} size={55} />
			</Link>
			<div className="news_user-info">
				<UserSign
					authorName={authorName}
					authorNickname={authorNickname}
					isAuthorVerified={isAuthorVerified}
				/>
				<p className="description">{removeHashtagFromText(description)}</p>
				<Hashtags hashtags={hashtags} />
			</div>
		</S.Header>
	)
}

const S = {
	Header: styled.div`
		display: grid;
		grid-template-columns: 55px 1fr;
		column-gap: 1rem;
		margin-bottom: 1rem;

		.news_user-info {
			.description {
				margin: 0.25rem 0;
			}
		}
	`,
}

export default Header
