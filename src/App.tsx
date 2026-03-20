import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App(){
  return (
    <main className="app-shell">
      <RepositoryList />
    </main>
  )
}