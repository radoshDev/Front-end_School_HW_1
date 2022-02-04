import { render, screen } from "@testing-library/react"
import { User } from "../../../types/usersTypes"
import About from "./About"

let mockUser: Pick<User, "uniqueId" | "verified" | "nickname" | "signature">
describe("#About", () => {
	beforeEach(() => {
		mockUser = {
			uniqueId: "test-id",
			verified: false,
			nickname: "test-nickname",
			signature: "test-signature",
		}
	})
	it("should render component when isLoading not passed", () => {
		render(<About user={mockUser as User} />)
		expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
			new RegExp(mockUser.uniqueId)
		)
		expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
			new RegExp(mockUser.nickname)
		)
		expect(screen.getByText(mockUser.signature)).toBeInTheDocument()
	})
	it("should render verified icon", () => {
		mockUser.verified = true
		render(<About user={mockUser as User} />)
		expect(screen.getByTestId("verified-icon")).toBeInTheDocument()
	})
	it("should render preloader when isLoading passed truthy", () => {
		mockUser.verified = true
		render(<About user={{} as User} isLoading />)
		expect(screen.getByTestId("rectangle-preloader")).toBeInTheDocument()
	})
	it("should render content when isLoading passed falsy", () => {
		mockUser.verified = true
		render(<About user={{} as User} isLoading={false} />)
		expect(screen.queryByTestId("rectangle-preloader")).not.toBeInTheDocument()
		expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
	})
})
