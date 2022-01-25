import { useEffect, useState, FC } from "react"
import { useDispatch } from "react-redux"
import { loadTrends } from "store/slices/trendsSlice"
import { useAppSelector } from "store/hooks"
import Pagination from "components/ui/Pagination/Pagination"
import TrendPreloader from "components/trends/Preloader/Preloader"
import ErrorText from "components/ui/ErrorText"
import Card from "components/trends/Card"
import styled from "styled-components/macro"

const Trends: FC = () => {
	const dispatch = useDispatch()
	const { data, isLoading, error } = useAppSelector(s => s.trends)
	const [currentPage, setCurrentPage] = useState(1)
	const trendsPerPage = 5
	const totalPages = Math.ceil(data.length / trendsPerPage)
	const start = (currentPage - 1) * trendsPerPage
	const end = start + trendsPerPage

	useEffect(() => {
		if (data.length === 0) {
			dispatch(loadTrends())
		}
		window.scrollTo(0, 0)
	}, [dispatch, currentPage, data.length])

	if (error)
		return (
			<S.Videos>
				<ErrorText>{error}</ErrorText>
			</S.Videos>
		)
	return (
		<S.Videos>
			{isLoading ? (
				<TrendPreloader />
			) : (
				<>
					{data.slice(start, end).map(trend => (
						<Card key={trend.id} trend={trend} />
					))}
					<div className="pagination-wrapper">
						<Pagination
							activePage={currentPage}
							totalPages={totalPages}
							setActivePage={setCurrentPage}
						/>
					</div>
				</>
			)}
		</S.Videos>
	)
}

const S = {
	Videos: styled.div`
		max-width: 600px;
		margin: 2rem auto;
		position: relative;

		.pagination-wrapper {
			width: 500px;
			margin: 0 auto;
			text-align: center;
		}
	`,
}

export default Trends
