import { useEffect, useState } from "react";

export function useContent(){
    const [contents, setContents] = useState([]);

    useEffect(() => {
        axios.get(`$(B)`)
    })

    return contents;
}