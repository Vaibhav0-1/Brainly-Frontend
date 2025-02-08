import { useState } from "react";

export function useContent(){
    const [contents, setContents] = useState([]);

    return contents
}