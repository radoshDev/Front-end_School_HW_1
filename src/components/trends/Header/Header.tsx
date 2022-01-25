import { FC } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"
import { Hashtag } from "types/trendsTypes"
import Avatar from "components/ui/Avatar/Avatar"
import Hashtags from "components/ui/Hashtags"
import UserSign from "components/trends/UserSign"

type Props = {
	avatarUrl: string
	authorName: string
	authorNickname: string
	description: string
	isAuthorVerified: boolean
	hashtags: Hashtag[]
}

const Header: FC<Props> = props => {
	const { avatarUrl, authorName, authorNickname, description, isAuthorVerified, hashtags } = props
	const descriptionWithoutHashSymbol = description.replace(/\b#\w+\s?/g, "")
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
				<p className="description">{descriptionWithoutHashSymbol}</p>
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
