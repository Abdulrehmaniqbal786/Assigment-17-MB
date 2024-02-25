import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Cards} from '../components/Cards'
import  { Navbar_Components } from '../components/Navbar_Components'

const Products = () => {

useEffect(()=>{ 
    getData()
},[])


const [products,setProducts] = useState([])

const getData = ()=>{
    const data= axios.get("https://fakestoreapi.com/products")
    .then((res)=>{console.log(res.data)
        setProducts(res.data)

    })
    .catch((err)=>{
        console.log(err)
    })
}

  return (
    <>
    <Navbar_Components/>
    <div style={{display:"flex",flexWrap:"wrap",gap:"50px" }} className='justify-between  m-6 '>
        { products.map((e,i)=>{
           return(  <Cards key={i} image={e.image} title={e.title} desc={e.description} id={e.id}/>
            )})
}
    </div>
    </>
  )
}

export default Products;