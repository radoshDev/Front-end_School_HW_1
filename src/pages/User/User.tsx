import { useEffect, FC } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { FaVideo } from "react-icons/fa"
import { loadUserInfo } from "../../store/slices/userSlice"
import { useAppSelector } from "../../store/hooks"
import ErrorText from "../../components/ui/ErrorText"
import Info from "../../components/user/Info"
import Statistics from "../../components/user/Statistics"
import Divider from "../../components/ui/Divider"
import VideoGrid from "../../components/user/VideoGrid"

const UserPage: FC = () => {
	const dispatch = useDispatch()
	const { data: userInfo, isLoading: isInfoLoading, error } = useAppSelector(s => s.user.info)
	const { id } = useParams()

	useEffect(() => {
		window.scrollTo(0, 0)
		if (id && id !== userInfo?.uniqueId) {
			dispatch(loadUserInfo(id))
		}
	}, [id, dispatch])
	if (error) return <ErrorText>{error}</ErrorText>
	return (
		<>
			<Info isLoading={isInfoLoading} user={userInfo} />
			<Statistics />
			<Divider lineHeight={4}>
				<FaVideo size={25} />
				Videos
			</Divider>
			<VideoGrid />
		</>
	)
}

export default UserPage
