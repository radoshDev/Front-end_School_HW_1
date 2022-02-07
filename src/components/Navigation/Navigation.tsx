import { useEffect, FC } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components/macro"
import { useAppSelector } from "../../store/hooks"
import { authUser } from "../../store/slices/userSlice"
import { Container } from "../../styles/CommonStyles"
import ErrorText from "../ui/ErrorText"
import Switcher from "../ui/Switcher"
import Logo from "./Logo"
import UserIcon from "./UserIcon"

const Navigation: FC = () => {
	const dispatch = useDispatch()
	const { data: user, isLoading, error } = useAppSelector(s => s.user.auth)
	useEffect(() => {
		dispatch(authUser())
	}, [dispatch])

	return (
		<S.Menu>
			<Container>
				<S.InnerMenu>
					<Logo />
					<UserIcon isLoading={isLoading} user={user} />
					{error && <ErrorText>{error}</ErrorText>}
					<Switcher />
				</S.InnerMenu>
			</Container>
		</S.Menu>
	)
}

const S = {
	Menu: styled.nav`
		border-bottom: 1px solid grey;
		background-color: ${p => p.theme.main.bgColor};
		position: sticky;
		top: 0;
		width: 100%;
		z-index: 5;
	`,
	InnerMenu: styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 50px;
	`,
}

export default Navigation
