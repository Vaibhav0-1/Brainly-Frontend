import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent(){
    const [contents, setContents] = useState([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization" : 
            }
        })
            .then((response) => {
                setContents(response.data.content)
            })
    },[])

    return contents;
}