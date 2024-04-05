import { useEffect, useState } from "react"
import { loadDrinks } from "../services/loadData";


export default function useProducts() {
    
    const [products, setProducts] = useState('')
    
    useEffect(()=>{
        const drinks = loadDrinks()
        setProducts(drinks)
        //console.log(drinks)
    }, [])
    
    return products

}

