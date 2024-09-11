import { fireEvent, render, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation"

describe('Sidebar' ,() => {
    test('render Sidebar', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('Toggle test', () => {
        renderWithTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId('toggle-btn')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('Sidebar collapsed')
    })
})