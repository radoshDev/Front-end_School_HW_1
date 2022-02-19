import { ReactElement } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Hashtag } from "../../../types/trendsTypes"

type Props = {
	hashtags?: Hashtag[]
}

const Hashtags = ({ hashtags = [] }: Props): ReactElement => {
	return (
		<S.Hashtags>
			{hashtags.map(({ id, name }) => (
				<Link key={id} to={`tag/${name}`}>
					#{name}
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
