import { Button } from '../components/ui/Button'
import { PlusIcon } from '../Icons/PlusIcon'
import { ShareIcon } from '../Icons/ShareIcon'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import {  useEffect, useState } from 'react'
import { Sidebar } from '../components/ui/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'

export function Dashboard()  {
    const [modalOpen, setModalOpen] = useState(false);
    const { contents, refresh } = useContent();

    useEffect(() => {
      refresh();
    },[modalOpen])

  return (
    <div className="p-4 ml-72 h-screen bg-gray-100 border-sm border-gray-200">
      <Sidebar/>
    <div>
    <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />   

      <div className="flex justify-end gap-4">
      <Button onClick={() => {
        setModalOpen(true)
      }}variant='primary' text='Add Content' size='sm' startIcon={<PlusIcon size={'md'}/>}></Button>

      <Button onClick={async ()=>{
        const response = await axios.post(BACKEND_URL + "/api/v1/brain/share", {
          share: true
        });
        const shareUrlresponse.data.hash
      }} variant='secondary' text='Share Brain' size='sm' startIcon={<ShareIcon size='md'/>}></Button>
    </div>

    <div className='flex gap-4 flex-wrap'>
    {contents.map(({type, link, title}) => <Card 
      type={type} 
      link={link} 
      title={title}
    />)}
      </div>
    </div>
  </div>
  )
}

