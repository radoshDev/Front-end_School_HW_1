import { FC } from "react"
import Header from "../Header"
import Content from "../Content"
import { Trend } from "../../../types/trendsTypes"
import Divider from "../../ui/Divider"

export type CardProps = {
	trend: Trend
}

const Card: FC<CardProps> = ({ trend }) => {
	return (
		<div className="trend-card">
			<Header
				avatarUrl={trend.authorMeta.avatar}
				authorName={trend.authorMeta.name}
				authorNickname={trend.authorMeta.nickName}
				description={trend.text}
				isAuthorVerified={trend.authorMeta.verified}
				hashtags={trend.hashtags}
			/>
			<Content
				videoUrl={trend.videoUrl}
				commentCount={trend.commentCount}
				likeCount={trend.diggCount}
			/>
			<Divider lineHeight={2} />
		</div>
	)
}

export default Card
