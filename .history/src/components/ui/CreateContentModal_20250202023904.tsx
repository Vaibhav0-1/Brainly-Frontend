import { InputBox } from "../ui/InputBox";
import { CrossIcon } from "../../Icons/CrossIcon";
import { Button } from "./Button";
import { useEffect, useRef } from "react";


//controlled Component
export function CreateContentModal({open, onClose}: { open: boolean; onClose: () => void }){
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          onClose(); 
        }
      };
  
      if (open) {
        document.addEventListener("mousedown", handleOutsideClick); // Add event listener when modal is open
      }
  
      // Clean up the event listener when modal is closed or on component unmount
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [open, onClose]); // Re-run the effect if `open` changes
  
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
                    <InputBox placeholder= {"Title"}/>
                    <InputBox placeholder= {"Link"}/>
                </div>
                <div className="flex justify-center">
                <Button variant="primary" size="md" text="Submit"/>
                </div>
                <div>

                </div>
                
            </span>
        </div>
        
    </div>
}