import { Button } from './components/ui/Button'
import './App.css'

function App() {

  return (
    <>
      <Button startIcon={</>}size="sm" variant="primary" text='Share'></Button>
      <Button size="md" variant="secondary" text='Add Content'></Button>
      <Button size="lg" variant="secondary" text='Add Content'></Button>
    </>
  )
}

export default App
