import './sign_up.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import imagePath from '../images/chris-lee-70l1tDAI6rM-unsplash 1.jpg';

export default function SignUp() {
    const [handleInput, setHandleInput] = useState({
        singUpUsername: "",
        singUpEmail: "",
        singUpPassword: ""
    });

    function handleChange(e) {
        setHandleInput({
            ...handleInput,
            [e.target.name]: e.target.value
        });
    }

    function handleSignup(e) {
        e.preventDefault();
        console.log(handleInput);

        setHandleInput({
            singUpUsername: "",
            singUpEmail: "",
            singUpPassword: ""
        });
    }

    return (
        <div className='signUp' id='signUp'>
            <div className='left'>
                <div className='leftBody'>
                    <div className='leftBodyHeading'>
                        <p>Get Started Now</p>
                    </div>
                    <div className='leftBodyForm'>
                        <form>
                            <div className='formElements'>
                                <label htmlFor="singUpUsername">Name</label><br />
                                <input
                                    type="text"
                                    placeholder='Enter your name'
                                    name='singUpUsername'
                                    value={handleInput.singUpUsername}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='formElements'>
                                <label htmlFor="singUpEmail">Email Address</label><br />
                                <input
                                    type="email"
                                    placeholder='Enter Your Email'
                                    name='singUpEmail'
                                    value={handleInput.singUpEmail}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='formElements'>
                                <label htmlFor="singUpPassword">Password</label><br />
                                <input
                                    type="password"
                                    placeholder='Enter Your Password'
                                    name='singUpPassword'
                                    value={handleInput.singUpPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                className='signUpBtn'
                                onClick={handleSignup}
                            >Sign Up</button>
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
                        <p>Have an account? <Link to="/login">Sign in</Link></p>
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
