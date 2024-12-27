import './App.css'
import { RouterMain } from './components/services/router-routes/routes'
import { Auth } from './components/services/context/auth';
function App() {
  return (
    <div>
      <Auth>
        <RouterMain />
      </Auth>
    
    </div>
  )
}

export default App
