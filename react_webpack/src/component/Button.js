import React from "react";

function Button({children,onClick}){
    return(
        <button className="button_navbar" onClick={onClick}>{children}</button>
    );
}

export default Button;