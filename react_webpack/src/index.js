import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import Button from './component/Button'
import Card from './component/Card'
import Navabar from './component/Navbar'
import Login from './views/Login'
import { useState } from 'react'
import './css/style_card.css'

const arr = [
    {
        username:'duyen',
        password:'123'
    },
    {
        username: 'My',
        password: '123'
    }
];

// Tạo component App
function App() {

    //counter
    const [userArr, setUserArr] = useState(arr);
    const [counter, setCounter] = useState(0);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState({
        name:'Hung',
        age:20,
        hobby:'phim heo'
    })


    //Sử dụng toán tử Rest
    const handleUpdate = () => {
        const newUser = {
            username: username,
            password: password
        }

        setUserArr(prev => [...userArr, newUser]);
    }

    console.log(userArr)

    //Sử dụng call back
    // const handleUpdate = () => {
    //     setUser(prev => {
    //         return {
    //             ...prev,
    //             ny:'Ha my'
    //         }
    //     })
    // }

    const handleSubmit=()=>{
        setUserArr({
            ...userArr,
            username: username,
        })
    }

    console.log(userArr);

    const handleIncrease = () => {
        setCounter(counter + 1);
    }

    const handleDecrease = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(0);
    }

    const handleClick = () => {
        console.log(Math.random())
    }

    return (
        <div>
            {/* <div className='full_navbar'>
                <Navabar/>
                <Button onClick={handleClick} >Login</Button>
            </div>
            <Login/>
            <h1>{counter}</h1> */}
            {/* <Button onClick={handleIncrease}>Increase</Button>
            <Button onClick={handleDecrease}>Decrease</Button>
            <Button onClick={handleReset}>Reset</Button> */}
            <input type='text' placeholder='Enter name' onChange={(event)=>setUsername(event.target.value)}/>
            <input type='text' placeholder='Enter password' onChange={(event)=>setPassword(event.target.value)}/>
            <Button onClick={handleSubmit} >Submit</Button>
            <ul>
                {userArr.map((item,index) => {
                    return <li key={index}>{item.username} - {item.password}</li>
                })}
            </ul>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

