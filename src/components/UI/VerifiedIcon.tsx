import { FC } from "react"
import { MdVerified } from "react-icons/md"

type Props = {
	size: number
}

const VerifiedIcon: FC<Props> = ({ size }) => {
	return <MdVerified color="lightblue" size={size} />
}

export default VerifiedIcon
