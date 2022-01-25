/* eslint-disable unicorn/explicit-length-check */
import { ReactElement } from "react"
import Rectangle from "components/ui/Rectangle"
import styled from "styled-components/macro"

type AvatarProps = {
	avatarUrl: string
	altText: string
	size: number
	isLoading?: boolean
}

const Avatar = ({ avatarUrl, altText, size, isLoading }: AvatarProps): ReactElement => {
	return (
		<S.Avatar size={size}>
			{isLoading ? <Rectangle width={size} height={size} /> : <img src={avatarUrl} alt={altText} />}
		</S.Avatar>
	)
}

const S = {
	Avatar: styled.div<Pick<AvatarProps, "size">>`
		width: ${p => `${p.size}px`};
		height: ${p => `${p.size}px`};
		border-radius: 50%;
		overflow: hidden;
		background-color: lightgray;
		img {
			object-fit: cover;
			object-position: center;
		}
	`,
}

export default Avatar
