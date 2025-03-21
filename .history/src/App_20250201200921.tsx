import {Button} from './components/ui/Button'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'
import { Card } from './components/ui/Card'

function App()  {
  return (
    <div className=''>
      <Button variant='primary' text='Add Content' size='sm' startIcon={<PlusIcon size={'md'}/>}></Button>
      <Button variant='secondary' text='Share Brain' size='sm' startIcon={<ShareIcon size='md'/>}></Button>
      <Card  ></Card>
      
    </div>
  )
}

export default App
