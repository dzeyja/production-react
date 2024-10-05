import { useTranslation } from "react-i18next"
import cls from './ErrorPage.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { Button } from "shared/ui/Button/Button"

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
            <div className={cls.errorContent}>
                <p>
                    {t('Произошла непредвиденная ошибка')}
                </p>
                <Button onClick={reloadPage}>Перезагрузить страницу</Button>
            </div>
        </div>
    )
}
