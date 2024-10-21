import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"

describe("App component tests", () => {
	beforeEach(() => {
		// write someting before each test
	})

	afterEach(() => {
		// write someting after each test
	})

	it("Renders Component", async () => {
		render(<App />)
	})
})
