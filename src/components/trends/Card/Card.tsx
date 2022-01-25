import { FC } from "react"
import Divider from "components/ui/Divider"
import { Trend } from "types/trendsTypes"
import Header from "../Header"
import Content from "../Content"

type Props = {
	trend: Trend
}

const TrendCard: FC<Props> = ({ trend }) => {
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
			<Divider />
		</div>
	)
}

export default TrendCard
