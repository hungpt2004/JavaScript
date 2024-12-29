import React from "react";
function Login(){

    const handleLogin = () => {
        console.log('Da login')
    }

    return(
        <div className="form_login">
            <form>
                <div className="info-form">
                    <label>Username</label>
                    <input type="text" placeholder="Enter username..." onChange={(event) => event.target}/>
                </div>
                <div  className="info-form">
                    <label>Password</label>
                    <input type="text" placeholder="Enter password..." onChange={(event) => event.target}/>
                </div>
                <button className="button-login">Login</button>
            </form>
        </div>
    );
}

export default Login