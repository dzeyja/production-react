import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRoutes } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div
      className={classNames('app', { hovered: true, border: true }, [theme])}
    >
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
