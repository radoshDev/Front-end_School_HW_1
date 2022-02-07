import { ReactElement } from "react"
import styled from "styled-components/macro"
import { abbreviateNumber } from "../../../helpers/abbreviateNumber"
import { useAppSelector } from "../../../store/hooks"
import ErrorText from "../../ui/ErrorText"
import Rectangle from "../../ui/Rectangle"

const Statistics = (): ReactElement => {
	const { data, isLoading, error } = useAppSelector(s => s.user.feed)
	const stats = data[0]?.authorStats

	if (error) return <ErrorText>{error}</ErrorText>

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
		color: ${p => p.theme.main.textColor};
		.bold {
			font-weight: bold;
		}
	`,
}
export default Statistics
