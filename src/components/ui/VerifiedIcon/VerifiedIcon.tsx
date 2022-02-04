import { FC } from "react"
import { MdVerified } from "react-icons/md"

type Props = {
	size: number
}

const VerifiedIcon: FC<Props> = ({ size }) => {
	return <MdVerified color="lightblue" size={size} data-testid="verified-icon" />
}

export default VerifiedIcon
