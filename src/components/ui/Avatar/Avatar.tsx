/* eslint-disable unicorn/explicit-length-check */
import { ReactElement } from "react"
import styled from "styled-components/macro"
import Rectangle from "../Rectangle"

export type AvatarProps = {
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
		display: flex;
		align-items: center;
		img {
			object-fit: cover;
			object-position: center;
		}
	`,
}

export default Avatar
