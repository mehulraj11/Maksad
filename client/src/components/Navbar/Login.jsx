import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import imagePath from '../images/chris-lee-70l1tDAI6rM-unsplash 1.jpg';

export default function Login() {
    const [handleInput, setHandleInput] = useState({
        loginEmail: "",
        loginPassword: ""
    });

    function handleChange(e) {
        setHandleInput({
            ...handleInput,
            [e.target.name]: e.target.value
        });
    }

    function handleLogin(e) {
        e.preventDefault();
        console.log(handleInput);
        setHandleInput({
            loginEmail: "",
            loginPassword: ""
        });
    }

    return (
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
                                <label htmlFor="loginEmail">Email Address</label><br />
                                <input
                                    type="email"
                                    placeholder='Enter Your Email'
                                    name='loginEmail'
                                    value={handleInput.loginEmail}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='formElements'>
                                <label htmlFor="loginPassword">Password</label><br />
                                <input
                                    type="password"
                                    placeholder='Enter Your Password'
                                    name='loginPassword'
                                    value={handleInput.loginPassword}
                                    onChange={handleChange}
                                />
                                <div className='forgotPassword'>
                                    <Link to="#">Forgot Password</Link>
                                </div>
                            </div>
                            <button
                                className='signUpBtn'
                                onClick={handleLogin}
                            >Login</button>
                        </form>
                    </div>
                    <div>
                        <p className='hrLine'><span>Or</span></p>
                    </div>
                    {/* Uncomment and use this if you have a Google sign-in functionality
                    <div className='googleSignUp'>
                        <button>Sign in with Google</button>
                    </div>
                    */}
                    <div className='leftFooter'>
                        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </div>
            {/* Uncomment this section if you want to include an image on the right side
            <div className='right'>
                <img src={imagePath} alt="Chris Lee Unsplash" />
            </div>
            */}
        </div>
    );
}
