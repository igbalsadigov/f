import React from 'react'
const ProductCard = ({item}) => {
  return (
    <div>
      
        <p>{item.title}</p>
        <h6>{item.price}</h6>
    
    </div>
  )
}

export default ProductCard