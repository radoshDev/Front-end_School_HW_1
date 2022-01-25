import { useEffect, FC } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components/macro"
import { loadUserInfo } from "store/slices/userSlice"
import { FaVideo } from "react-icons/fa"
import { useAppSelector } from "store/hooks"
import Divider from "components/ui/Divider"
import UserVideoBlock from "components/user/VideoGrid"
import ErrorText from "components/ui/ErrorText"
import Info from "components/user/Info"
import Statistics from "components/user/Statistics"

const UserPage: FC = () => {
	const dispatch = useDispatch()
	const { data: infoData, isLoading: isInfoLoading, error } = useAppSelector(s => s.user.info)
	const { id } = useParams()

	useEffect(() => {
		window.scrollTo(0, 0)
		if (id && id !== infoData?.user?.uniqueId) {
			dispatch(loadUserInfo(id))
		}
	}, [id, dispatch])
	if (error) return <ErrorText>{error}</ErrorText>
	return (
		<>
			<Info isLoading={isInfoLoading} user={infoData.user} />
			<Statistics isLoading={isInfoLoading} stats={infoData.stats} />
			<Divider height="4px">
				<S.LineContent>
					<FaVideo size={25} />
					Videos
				</S.LineContent>
			</Divider>
			<UserVideoBlock />
		</>
	)
}

const S = {
	LineContent: styled.p`
		display: flex;
		align-items: center;
		padding-bottom: 3px;
		margin: 0 1rem;
		svg {
			margin-right: 0.5rem;
			margin-bottom: -3px;
		}
	`,
}

export default UserPage
