import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLinks, AppLinkTheme } from 'shared/ui/AppLinks/AppLinks'
import { ThemeSwitcher } from 'shared/ui/ThemeSwicher'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLinks
          to="/"
          className={cls.mainLinks}
          theme={AppLinkTheme.PRIIMARY}
        >
          Main Page
        </AppLinks>
        <AppLinks to="/about" theme={AppLinkTheme.PRIIMARY}>
          About Page
        </AppLinks>
      </div>
    </div>
  )
}
