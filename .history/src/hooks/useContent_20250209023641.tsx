import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent(){
    const [contents, setContents] = useState([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}`)
    })

    return contents;
}