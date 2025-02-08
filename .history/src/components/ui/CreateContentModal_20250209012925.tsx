import { InputBox } from "../ui/InputBox";
import { CrossIcon } from "../../Icons/CrossIcon";
import { Button } from "./Button";
import { useEffect, useRef, useState } from "react";

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
      <div className="w-screen h-screen bg-purple-200 fixed top-0 left-0 opacity-50 flex justify-center">
      </div>

      <div className="w-screen h-screen bg-purple-200 fixed top-0 left-0 flex justify-center">
      </div>
    </div>}
  </div>
}