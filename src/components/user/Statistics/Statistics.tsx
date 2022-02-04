import { ReactElement } from "react"
import styled from "styled-components/macro"
import { abbreviateNumber } from "../../../helpers/abbreviateNumber"
import { Stats } from "../../../types/usersTypes"
import Rectangle from "../../ui/Rectangle"

type Props = {
	isLoading: boolean
	stats: Stats
}

const Statistics = ({ isLoading, stats }: Props): ReactElement => {
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
