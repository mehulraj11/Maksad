import './login.css'
// import imagePath from '../images/chris-lee-70l1tDAI6rM-unsplash 1.jpg';import { useState } from 'react';
export default function Login(){
    const [handleInput, setHandleInput] = useState({
        loginEmail :"",
        loginPassword: ""
    });
    function handleChange(e){
        // console.log(e.target.value, e.target.name);
        setHandleInput({
            ...handleInput, 
            [e.target.name] : e.target.value
        })
    }
    function handleLogin(e){
        e.preventDefault();
        console.log(handleInput)
        setHandleInput({
            loginEmail :"",
            loginPassword: "" 
        })
        
    }
    return(
        <div className='login' id='login'>
        <div className='left'>
            <div className='leftBody'>
                <div className='leftBodyHeading'>
                    <p id='firstChild'>Welcome Back!</p>
                    <p id='secondChild'>Enter your Credentials to access your account</p>
                </div>
                <div className='leftBodyForm'>
                    <form>
                        <div className='formElements'>
                            <label htmlFor="">Email Address</label><br />
                            <input 
                                type="email" 
                                placeholder='Enter Your Email'
                                name='loginEmail'
                                value={handleInput.loginEmail}
                                onChange={handleChange}
                             />
                        </div>
                        <div className='formElements'>
                            <label htmlFor="">Password</label><br />
                            <input 
                                type="password" 
                                placeholder='Enter Your Password'
                                name='loginPassword'
                                value={handleInput.loginPassword}
                                onChange={handleChange}   
                            />
                            <div className='forgotPassword'>
                                <a href="#">Forgot Password</a>
                            </div>
                        </div>
                        <button 
                            className='singUpBtn'
                            onClick={handleLogin}
                        >Login</button>
                    </form>
                </div>
                <div>
                <p className='hrLine'><span>Or</span></p>
                </div>
                {/* <div className='googleSingUp'>
                    <button>Sign in with Google</button>
                </div> */}
                <div className='leftFooter'>
                    <p>Don't have an account? <a href="#singUp">Sing up</a></p>
                </div>
            </div>
        </div>
        {/* <div className='right'>
            <img src={imagePath} alt="Chris Lee Unsplash" />
        </div> */}
    </div>
    )
}