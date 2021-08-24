import React from "react"
import './TattooItem.css'

function TattooItem(props){
  const {tattoo} = props;
    return(
    <div className="tattoo-item">
        <img src={tattoo.img} />
        <h4>{tattoo.title}</h4>
    </div>
  );
}

export default TattooItem;