export function Dashboard()  {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
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
    }} variant='primary' text='Add Content' size='sm' startIcon={<PlusIcon size={'md'}/>}></Button>

    <Button onClick={async ()=>{
      try {
        const response = await axios.post(BACKEND_URL + "/api/v1/brain/share", {
          share: true
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
        const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }} 
    variant='secondary' 
    text={copied ? 'Copied!' : 'Share Brain'} 
    size='sm' 
    startIcon={<ShareIcon size='md'/>}></Button>
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