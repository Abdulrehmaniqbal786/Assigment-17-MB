import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Navbar_Components} from '../components/Navbar_Components';

const Products_Details = () => {
    const {id} = useParams()

    useEffect(()=>{ 
        getData()
    },[])


const [singleProduct,setSingleProduct] = useState("")
const navigate = useNavigate()


    const getData = ()=>{
        const data= axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{console.log(res.data)
            setSingleProduct(res.data)

        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
    <Navbar_Components />
    <h1 className='font-bold  m-10 text-[30px]'>Details</h1>
    <div className='m-10 '>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={singleProduct.image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {singleProduct.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {singleProduct.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={()=>{
          navigate('/')
      }} size="small">Go Back </Button>

    </CardActions>
  </Card>
  </div>
  </div>
  )
}

export default Products_Details;