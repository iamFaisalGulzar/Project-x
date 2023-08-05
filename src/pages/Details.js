import React from 'react'
import {useParams} from 'react-router-dom';
import { MOBILE_DB } from '../components/HeroSection'
import NavBar from '../components/Navbar';

function Details() {
    const params = useParams();
    const mobile = MOBILE_DB.find(mobile => mobile.id == params.id)

  return (
    <>
    <NavBar />
    <div className='w-[50vw] mt-[200px] p-10 mx-auto flex justify-center flex-col items-center'>
    <h1>{mobile.title}</h1>
    <h3>Price: {mobile.price}</h3>
    <h4>Sold Amount: {mobile.sold}</h4>
    <p>
        {mobile.description}
    </p>
    <img className='w-[70%] h-[200px]' src={mobile.imageUrl} />
    </div>
    </>
  )
}

export default Details