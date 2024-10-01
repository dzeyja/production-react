import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLinks, AppLinkTheme } from 'shared/ui/AppLinks/AppLinks'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLinks
          to="/"
          className={cls.mainLinks}
          theme={AppLinkTheme.PRIIMARY}
        >
          {t('Главная ссылка')}
        </AppLinks>
        <AppLinks data-testid='about-link' to="/about" theme={AppLinkTheme.PRIIMARY}>
          {t('Ссылка о сайте')}
        </AppLinks>
      </div>
    </div>
  )
}
