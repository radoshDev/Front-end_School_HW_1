import { FC } from "react"
import styled from "styled-components/macro"
import Rectangle from "components/ui/Rectangle"
import { abbreviateNumber } from "helpers/abbreviateNumber"
import { Stats as StatsType } from "types/usersTypes"

type Props = {
	isLoading: boolean
	stats: StatsType
}

const Statistics: FC<Props> = ({ isLoading, stats }) => {
	return (
		<S.Statistics>
			{isLoading ? (
				<Rectangle width={325} height={30} />
			) : (
				<>
					<div>
						<span className="bold">{abbreviateNumber(stats.followingCount)}</span> Following
					</div>
					<div>
						<span className="bold">{abbreviateNumber(stats.followerCount)}</span> Followers
					</div>
					<div>
						<span className="bold">{abbreviateNumber(stats.heartCount)}</span> Likes
					</div>
				</>
			)}
		</S.Statistics>
	)
}

const S = {
	Statistics: styled.div`
		display: grid;
		grid-template-columns: repeat(3, max-content);
		column-gap: 1rem;
		margin: 1rem 0 2rem;
		.bold {
			font-weight: bold;
		}
	`,
}
export default Statistics
