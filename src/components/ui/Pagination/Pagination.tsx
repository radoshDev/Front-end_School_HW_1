import { FC, useEffect, useMemo, useState } from "react"
import styled from "styled-components/macro"

type Props = {
	activePage: number
	totalPages: number
	maxButtonsCount?: number
	setActivePage: (page: number) => void
}

const Pagination: FC<Props> = ({ totalPages, activePage, setActivePage, maxButtonsCount = 5 }) => {
	const [buttonsContent, setButtonsContent] = useState<number[]>([])
	const [buttonsOffset, setButtonsOffset] = useState(0)
	const items = useMemo(
		() => new Array<number>(totalPages).fill(1).map((item, index) => item + index),
		[totalPages]
	)

	useEffect(() => {
		const endOffset = buttonsOffset + maxButtonsCount
		setButtonsContent(items.slice(buttonsOffset, endOffset))
	}, [buttonsOffset, maxButtonsCount, items])

	// Invoke when user click to request another page.
	const handlePageClick = (currentPage: number): void => {
		const isLastButton = buttonsContent[buttonsContent.length - 1]
		if (currentPage === isLastButton && currentPage >= maxButtonsCount) {
			setButtonsOffset(p =>
				p < totalPages - maxButtonsCount ? p + 1 : totalPages - maxButtonsCount
			)
		}
		if (currentPage === buttonsContent[0]) {
			setButtonsOffset(p => (p > 0 ? p - 1 : 0))
		}
		setActivePage(currentPage)
	}
	const handlePrevious = (): void => {
		if (activePage > 1) handlePageClick(activePage - 1)
	}
	const handleNext = (): void => {
		if (activePage < totalPages) {
			handlePageClick(activePage + 1)
		}
	}
	return (
		<S.Pagination>
			<S.Btn className={activePage === 1 ? "active" : ""} onClick={handlePrevious}>
				Prev
			</S.Btn>
			{buttonsContent?.map(page => (
				<S.Btn
					className={activePage === page ? "active" : ""}
					key={page}
					onClick={() => handlePageClick(page)}>
					{page}
				</S.Btn>
			))}
			<S.Btn className={activePage === totalPages ? "active" : ""} onClick={handleNext}>
				Next
			</S.Btn>
		</S.Pagination>
	)
}

const S = {
	Pagination: styled.div`
		display: inline-flex;
		border: 1px solid rgba(34, 36, 38, 0.1);
		border-right: none;
	`,
	Btn: styled.button`
		border: none;
		min-width: 3em;
		line-height: 1;
		flex: 0 0 auto;
		user-select: none;
		background: white;
		padding: 0.92857143em 1.14285714em;
		color: rgba(0, 0, 0, 0.87);
		font-weight: 400;
		transition: background 0.1s ease, box-shadow 0.1s ease, color 0.1s ease,
			-webkit-box-shadow 0.1s ease;
		border-right: 1px solid rgba(34, 36, 38, 0.1);
		cursor: pointer;
		&:hover {
			background: rgba(0, 0, 0, 0.03);
		}
		&.active {
			background: rgba(0, 0, 0, 0.05);
		}
	`,
}

export default Pagination
