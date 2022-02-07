/* eslint-disable unicorn/no-for-loop */
import { renderWithRouter } from "../../../test/helper/renderWithRouter"
import { TextExtra as Hashtag } from "../../../types/trendsTypes"
import Hashtags from "./Hashtags"

const mockedHashtagList = [
	{ hashtagId: "test1", hashtagName: "test1-name" },
	{ hashtagId: "test2", hashtagName: "test2-name" },
	{ hashtagId: "test3", hashtagName: "test3-name" },
] as Hashtag[]

describe("#Hashtags", () => {
	it("should render 3 link when pass 3 hashtags item", () => {
		const { getAllByRole } = renderWithRouter(<Hashtags hashtags={mockedHashtagList} />)
		const hashLinks = getAllByRole("link")
		expect(hashLinks).toHaveLength(3)
		for (let i = 0; i < hashLinks.length; i += 1) {
			expect(hashLinks[i]).toHaveTextContent(mockedHashtagList[i].hashtagName)
			expect(hashLinks[i].getAttribute("href")).toBe(`/tag/${mockedHashtagList[i].hashtagName}`)
		}
	})
	it("shouldn't render hash links when pass empty array", () => {
		const { queryByRole } = renderWithRouter(<Hashtags hashtags={[]} />)
		expect(queryByRole("link")).not.toBeInTheDocument()
	})
})
