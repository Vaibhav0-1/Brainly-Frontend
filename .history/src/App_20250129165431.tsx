import { Button } from './components/ui/Button'
import './App.css'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'

function App() {

  return (
    <>
      <Button startIcon={<ShareIcon size={'md'}/>}  size="sm" variant="primary" text='Share'></Button>


      <Button startIcon={<PlusIcon size={'md'}/>} size="md" variant="secondary" text='Add Content'></Button>


      <Button size="lg" variant="secondary" text='Add Content'></Button>
    </>
  )
}

export default App
