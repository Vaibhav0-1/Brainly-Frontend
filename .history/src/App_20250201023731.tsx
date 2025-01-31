import {Button} from './components/ui/Button'
import { PlusIcon } from './Icons/PlusIcon'

function App()  {
  return (
    <div className='flex'>
      <Button variant='primary' text='Add Content' size='sm' startIcon={<PlusIcon size={'sm'}/>}></Button>
      <Button variant='secondary' text='Share' size='sm'></Button>
      
    </div>
  )
}

export default App
