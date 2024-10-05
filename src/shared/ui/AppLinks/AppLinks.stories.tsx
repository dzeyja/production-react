import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLinks, AppLinkTheme } from './AppLinks';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


export default {
  title: 'shared/AppLinks',
  component: AppLinks,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLinks>;

const Template: ComponentStory<typeof AppLinks> = (args) => <AppLinks {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]


