import React from 'react'
const images={github:"/images/github.png",
facebook:"/images/facebook.png",
instagram:"/images/instagram2.jfif"}
export const Contact = () => {
  return (
    <div>
      contact
      <div>
   <a href="https://github.com/narminmammadova1" target='blank'><img width="50px" src={images.github}alt="github" /></a>     
   <a href="https://www.facebook.com/" target='blank'> <img  width="60px"src={images.facebook} alt="facebook" />
</a>    
    <a href="https://www.instagram.com/" target='blank'><img  width="60px"src={images.instagram} alt="instagram" /></a>    

      </div>
    </div>
  )
}

