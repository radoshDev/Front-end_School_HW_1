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
				avatarUrl={trend.author.avatarThumb}
				authorName={trend.author.uniqueId}
				authorNickname={trend.author.nickname}
				description={trend.desc}
				isAuthorVerified={trend.author.verified}
				hashtags={trend.textExtra}
			/>
			<Content
				videoUrl={trend.video.playAddr}
				commentCount={trend.stats.commentCount}
				likeCount={trend.stats.diggCount}
			/>
			<Divider lineHeight={2} />
		</div>
	)
}

export default Card
