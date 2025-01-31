import {Button} from './components/ui/Button'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'

function App()  {
  return (
    <div className='flex'>
      <Button variant='primary' text='Add Content' size='sm' startIcon={<PlusIcon size={'md'}/>}></Button>
      <Button variant='secondary' text='Share' size='sm' startIcon={<ShareIcon size=''/>}></Button>
      
    </div>
  )
}

export default App
