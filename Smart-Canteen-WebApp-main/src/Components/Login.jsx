import React, { useState } from 'react'
import './ComponentCSS/Login.css';


// set temp id pass
const validEmail = "test@gmail.com";
const validPass = "12345";



const Login = (props) => {
    const { onClose } = props;

    // setVisibility of popup
    const [visibility, setVisibility] = useState('visible');
    // setVisibility of popup
    const [top, setTop] = useState('20px');

    // open popup call then visibility of div is visible
    const closePopup = (e) => {
        e.preventDefault();
        setVisibility('hidden');
        setTop('-100px');
        onClose();
    }


    // make state which store id passs
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    // handle user id pass input
    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        // set in user
        setUser({ ...user, [name]: value });
        console.log(value);
    }

    // handle if login
    const handleGo = (e) => {
        e.preventDefault();
        console.log(user);
        if(user.email === validEmail && user.password === validPass){
            window.location.href = "/employee";
        }
        else{
            alert("Invalid Credintials");
        }
        closePopup(e);
    }



    return (
        // Conditional rendering: Show the component only if 'show' is true

        <div className="LoginForms">
            <div id="allBox" className="allBox" style={{ transition: 'scale(1.3)', top: top, visibility: visibility }}>
                <h2>Employee Login : </h2>
                <hr />
                <form action="" id="LoginForm">
                    {/* Email input */}
                    <div id="emailId">
                        <label htmlFor="">Email Id : </label><br />
                        <input onChange={handleInput} type="email" name="email" id="addEmail" placeholder="tiger@gmail.com" />
                    </div>
                    {/* Password input */}
                    <div id="password">
                        <label htmlFor="">Password : </label><br />
                        <input onChange={handleInput} type="password" name="password" id="addPass" placeholder="*****" />
                    </div>
                    <hr />
                    <div id="Bottons">
                        <button id="CloseBtn" onClick={closePopup}> Close </button>
                        <button id="GoBtn" onClick={handleGo} >Go </button>
                    </div>
                </form>
            </div>
        </div>


    )

}

export default Login
