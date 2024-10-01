import { fireEvent, render, screen } from "@testing-library/react"

import App from "app/App"
import { MemoryRouter } from "react-router-dom"

describe('App Routes', () => {
    test('first test with router, integration test', () => {
        render(<MemoryRouter>
            <App />
        </MemoryRouter>)
    const aboutPageLink = screen.getByTestId('about-link')
    fireEvent.click(aboutPageLink)
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
})
})