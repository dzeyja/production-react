import { addDecorator } from "@storybook/react"
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(RouterDecorator)
addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
