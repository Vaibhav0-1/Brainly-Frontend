import { InputBox } from "../ui/InputBox";
import { CrossIcon } from "../../Icons/CrossIcon";
import { Button } from "./Button";
import { useEffect, useRef } from "react";


//controlled Component
export function CreateContentModal({open, onClose}: { open: boolean; onClose: () => void }){

  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType]

  function addContent(){
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;


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

    return <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
        <div className="flex flex-col justify-center shadow-md rounded" ref={modalRef}>
            <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon/>
                    </div>
                </div>
                <div>
                    <InputBox reference={titleRef} placeholder= {"Title"} />
                    <InputBox reference={linkRef} placeholder= {"Link"} />
                </div>
                <div className="flex justify-center">
                <Button onClick={addContent} variant="primary" size="md" text="Submit"/>
                </div>
                <div>

                </div>
                
            </span>
        </div>
        
    </div>
}