import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { MainPageAsynk } from './pages/MainPage/MainPage.asynk'
import { AboutPageAsynk } from './pages/AboutPage/AboutPage.asynk'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'
import './styles/index.scss'

const App = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <div
      className={classNames('app', { hovered: true, border: true }, [
        theme,
        'cl1',
      ])}
    >
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsynk />} />
          <Route path="/about" element={<AboutPageAsynk />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
