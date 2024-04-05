import { useEffect, useState } from "react";
import { loadTop } from "../services/loadData";

export default function useTop() {
    const [welcome, setWelcome] = useState('');
    const [message, setMessage] = useState('');

    useEffect(()=>{
        const topData = loadTop();
        setWelcome(topData.welcome);
        setMessage(topData.message)
        //console.log(topData)
    }, []) 

    return [welcome, message]
}