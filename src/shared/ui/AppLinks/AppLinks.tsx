import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLinks.module.scss'

export enum AppLinkTheme {
  PRIIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinksProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLinks: FC<AppLinksProps> = (props) => {
  const { to, theme = AppLinkTheme.PRIIMARY, className, children } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLinks, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  )
}
