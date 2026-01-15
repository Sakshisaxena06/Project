import React, { useRef, useState } from 'react'
import default_image from '../Assets/default_image.svg';

import "./imageGenerator.css"
const imageGenerator = () => {
  const [image_url,setImage_url] =useState("/")
  let inputref = useRef(null);
  const imageGenerator= async ()=>{
    if(inputref.current.value === ""){
      return 0 
    }
  }

  return (
    <div className='ai-image-generator'>
        <div className='header' > AI image
<span>Generator</span>
        </div>
        <div className='img-loading'> 
           <div className='image'>  <img src={image_url==="/" ? default_image : image_url} alt="default" /></div>

        </div>
        <div className="search-box">
          <input type="text" ref={inputref} className='search-input' placeholder= 'Describe What u want to see' />
       <div className="generate-btn">Generator</div>
        </div>
        </div>
  )
}

export default imageGenerator