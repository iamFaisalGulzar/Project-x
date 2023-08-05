import React from 'react'
import CardItem from './CardItem'
import image1 from '../../asserts/mobile1.jpeg'
import image2 from '../../asserts/mobile2.jpeg'
import image3 from '../../asserts/mobile3.jpeg'


export const MOBILE_DB = [
  {
    id: 1,
    title: "Samsung 8+",
    price: 233,
    sold: 22,
    imageUrl: image1,
    description: "My favourite mobile"
  },
  {
    id: 2,
    title: "Nokia",
    price: 455,
    sold: 11,
    imageUrl: image2,
    description: "My favourite mobile Nokia"
  },
  { 
    id: 3,
    title: "Glaxy",
    price: 555,
    sold: 32,
    imageUrl: image3,
    description: "My favourite mobile Glaxy"
  },
  {
    id: 4,
    title: "Glaxy",
    price: 555,
    sold: 32,
    imageUrl: image3,
    description: "My favourite mobile Glaxy"
  },
  {
    id: 5,
    title: "Glaxy",
    price: 555,
    sold: 32,
    imageUrl: image3,
    description: "My favourite mobile Glaxy"
  },
]


function HeroSection() {
  return (
    <div className='mobile-container py-[60px] w-[80vw] mx-auto bg-gray-300 flex justify-around flex-wrap gap-y-10'>
      {MOBILE_DB.map(item => (
        <CardItem key={item.id} id={item.id} title={item.title} price={item.price} sold={item.sold} description={item.description} imageUrl={item.imageUrl} />
      ))}
        
    </div>
  )
}

export default HeroSection