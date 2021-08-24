import React from "react"
import './TattooItem.css'

function TattooItem(props){
  const {tattoo, onImgClick} = props;
    return(
    <div className="tattoo-item">
        <img src={tattoo.img} onClick={()=>{onImgClick(tattoo)}} />
        <h4>{tattoo.title}</h4>
    </div>
  );
}

export default TattooItem;