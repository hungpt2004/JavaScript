import React from "react";
function Card({title, content}){
    return (
       <div className="card">
            <p>{title}</p>
            <p>{content}</p>
       </div> 
    );
}

export default Card;