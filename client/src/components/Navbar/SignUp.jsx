import './sign_up.css';
import imagePath from '../images/chris-lee-70l1tDAI6rM-unsplash 1.jpg';
import { useState } from 'react';

export default function SignUp() {
    const [handleInput, setHandleInput] = useState({
        singUpUsername : "",
        singUpEmail: "",
        singUpPassword :""
    })
    function handleChange(e){
        setHandleInput({
            ...handleInput,
            [e.target.name] : e.target.value
        })
    }
    function handleSingup(e){
        e.preventDefault();
        console.log(handleInput);

        setHandleInput({
            singUpUsername : "",
            singUpEmail: "",
            singUpPassword :"" 
        })
    }
    return (
        <div className='signUp' id='singUp'>
            <div className='left'>
                <div className='leftBody'>
                    <div className='leftBodyHeading'>
                        <p>Get Started Now</p>
                    </div>
                    <div className='leftBodyForm'>
                        <form>
                            <div className='formElements'>
                                <label htmlFor="">Name</label><br />
                                <input 
                                    type="text" 
                                    placeholder='Enter your name'
                                    name='singUpUsername'
                                    value={handleInput.singUpUsername} 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='formElements'>
                                <label htmlFor="">Email Address</label><br />
                                <input 
                                    type="email" 
                                    placeholder='Enter Your Email'
                                    name='singUpEmail'
                                    value={handleInput.singUpEmail}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='formElements'>
                                <label htmlFor="">Password</label><br />
                                <input 
                                    type="password" 
                                    placeholder='Enter Your Password'
                                    name='singUpPassword'
                                    value={handleInput.singUpPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <button 
                                className='singUpBtn'
                                onClick={handleSingup}
                            >Sign Up</button>
                        </form>
                    </div>
                    <div>
                    <p className='hrLine'><span>Or</span></p>
                    </div>
                    {/* <div className='googleSingUp'>
                        <button>Sign in with Google</button>
                    </div> */}
                    <div className='leftFooter'>
                        <p>Have an account? <a href="#login">Sing in</a></p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img src={imagePath} alt="Chris Lee Unsplash" />
            </div>
        </div>
    );
}
