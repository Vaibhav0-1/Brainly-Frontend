import { Button } from '../components/ui/Button'
import { PlusIcon } from '../Icons/PlusIcon'
import { ShareIcon } from '../Icons/ShareIcon'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { useState } from 'react'
import { Sidebar } from '../components/ui/Sidebar'

export function Dashboard()  {
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="p-4 ml-72 h-screen bg-gray-100 border-sm border-gray-200">
      <Sidebar/>
    <div>
    <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />   

      <div className="flex justify-end gap-4">
      <Button onClick={() => {
        setModalOpen(true)
      }}variant='primary' text='Add Content' size='sm' startIcon={<PlusIcon size={'md'}/>}></Button>

      <Button variant='secondary' text='Share Brain' size='sm' startIcon={<ShareIcon size='md'/>}></Button>
    </div>

    <div className='flex gap-4'>
      <Card type="twitter" link="https://x.com/sde_ray/status/1885698288273539270" title='First tweet'></Card>

      <Card type="youtube" link="https://youtu.be/vvdB4OG2biw?si=QdrrfdGvrwPuW2Rv" title='First video'></Card>
      </div>
      </div>
    </div>
  )
}

export default App
