import styled from "styled-components/macro"
import Divider from "components/UI/Divider"
import { TrendItem as TrendI } from "types/trendsTypes"
import Header from "./Header"
import Content from "./Content"

type Props = {
	data: TrendI
}

const TrendItem = ({ data }: Props) => {
	return (
		<S.Card>
			<Header
				image={data.authorMeta.avatar}
				name={data.authorMeta.name}
				nickname={data.authorMeta.nickName}
				description={data.text}
				isVerified={data.authorMeta.verified}
				hashtags={data.hashtags}
			/>
			<Content
				videoUrl={data.videoUrl}
				commentCount={data.commentCount}
				likeCount={data.diggCount}
			/>
			<Divider />
		</S.Card>
	)
}

const S = {
	Card: styled.div``,
}

export default TrendItem
