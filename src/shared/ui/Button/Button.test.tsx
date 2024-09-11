import { toBeInTheDocument } from "@testing-library/jest-dom/matchers"
import React from "react";
import { Button, ButtonTheme } from "./Button"
import {render, screen} from '@testing-library/react'

describe('Button UI', () => {
    test('render Button', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('Button have a class', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST BUTTON</Button>)
        expect(screen.getByText('TEST BUTTON')).toHaveClass('Button clear')
        screen.debug()
    })
})
