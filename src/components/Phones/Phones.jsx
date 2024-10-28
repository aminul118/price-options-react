import { useEffect, useState } from "react"


export default function Phones() {
    const [phones, setPhones]=useState([])
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(res => res.json())
        .then(data => setPhones(data.data))
    },[])
  return (
    <div>
        <h2 className="text-3xl">Phones : {phones.length}</h2>


    </div>
  )
}
