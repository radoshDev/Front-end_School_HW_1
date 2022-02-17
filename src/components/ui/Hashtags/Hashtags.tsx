import { ReactElement } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { TextExtra as Hashtag } from "../../../types/trendsTypes"

type Props = {
	hashtags?: Hashtag[]
}

const Hashtags = ({ hashtags = [] }: Props): ReactElement => {
	return (
		<S.Hashtags>
			{hashtags.map(({ hashtagId, hashtagName }) => (
				<Link key={hashtagId} to={`tag/${hashtagName}`}>
					#{hashtagName}
				</Link>
			))}
		</S.Hashtags>
	)
}

const S = {
	Hashtags: styled.div`
		a {
			color: #4183c4;
			margin-right: 0.25rem;
			&:hover {
				text-decoration: underline;
			}
		}
	`,
}

export default Hashtags
