import {Button} from './components/ui/Button'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'
import { Card } from './components/ui/Card'

function App()  {
  return (
    <div className=''>
      <Button variant='primary' text='Add Content' size='sm' startIcon={<PlusIcon size={'md'}/>}></Button>

      <Button variant='secondary' text='Share Brain' size='sm' startIcon={<ShareIcon size='md'/>}></Button>
    <div className=''>
      <Card type="twitter" link="https://x.com/sde_ray/status/1885698288273539270" title='First tweet'></Card>

      <Card type="youtube" link="https://youtu.be/vvdB4OG2biw?si=QdrrfdGvrwPuW2Rv" title='First video'></Card>
      </div>
    </div>
  )
}

export default App
