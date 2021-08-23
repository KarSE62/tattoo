import React from "react"
import './TattooPost.css'

function TattooPost(){
    return(
        <div className="tattoo-post">
            <div className="tattoo-post-bg">
                <div className="tattoo-post-content">
                    <img src="/img/tattoo-01-small.jpg" />
                    <h4>ลายไฟ</h4>
                </div>
            </div>
        </div>
    );
}

export default TattooPost;