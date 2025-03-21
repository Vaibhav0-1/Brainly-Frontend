import { InputBox } from "../ui/InputBox";
import { CrossIcon } from "../../Icons/CrossIcon";
import { Button } from "./Button";
import { useEffect, useRef, useState } from "react";
import { BACKEND_URL } from "../../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter"
}


//controlled Component
export function CreateContentModal({open, onClose}: { open: boolean; onClose: () => void }){

  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Twitter);

  function addContent(){
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    await axios.post(`${BACKEND_URL}`)


  }

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          onClose(); 
        }
      };
      if (open) {
        document.addEventListener("mousedown", handleOutsideClick); 
      }
      return () => {

        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [open, onClose]); 
  
    if (!open) return null;

    return <div> 
    {open && <div> 
      <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-50 flex justify-center">
      </div>

      <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
      <div className="flex flex-col justify-center position-absolute" ref={modalRef}>
            <span className="bg-white opacity-100 p-4 rounded fixed">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon/>
                    </div>
                </div>
                <div>
                    <InputBox reference={titleRef} placeholder= {"Title"} />
                    <InputBox reference={linkRef} placeholder= {"Link"} />
                </div>
                <div>
                  <h1 className="justify-center flex">Type</h1>
                  <div className="flex gap-1 p-4 justify-center">
                  <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                    setType(ContentType.Twitter)
                  }} size={"md"}/>
                  <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"}
                  onClick={() => {
                    setType(ContentType.Youtube)
                  }}
                   size={"md"}/>
                   </div>

                </div>
                <div className="flex justify-center">
                <Button onClick={addContent} variant="primary" size="md" text="Submit"/>
                </div>
                <div>

                </div>
                
            </span>
        </div>
      </div>
    </div>}
  </div>
}