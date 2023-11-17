import React from 'react'
const coffeImage = '/images/coffee2.jfif';
export const Main = () => {
  return (
    <div>
      
    <div style={{width:"100%" }} >
    <img  style={{width:"100%" , objectFit: 'cover' }}
 src={coffeImage} alt="Coffee" />

        </div>  
    </div>
  )
}

