import { useTranslation } from "react-i18next"
import cls from './ErrorPage.module.scss'
import { classNames } from "shared/lib/classNames/classNames"

interface ErrorPageProps {
    className?: string
}

export function ErrorPage({className}: ErrorPageProps){
  const {t} = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>
                {t('Произошла непредвиденная ошибка')}
            </p>
            <button onClick={reloadPage}>Перезагрузить страницу</button>
        </div>
    )
}
