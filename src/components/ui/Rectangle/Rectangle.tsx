import { FC } from "react"

type Props = {
	width: number
	height: number
	fill?: string
}

const Rectangle: FC<Props> = ({ width, height, fill = "lightgray" }) => {
	if (width <= 0 || height <= 0) return null
	return (
		<svg width={width} height={height} data-testid="rectangle-preloader">
			<rect width={width} height={height} fill={fill} />
		</svg>
	)
}

export default Rectangle
