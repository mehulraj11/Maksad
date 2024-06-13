import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Navbar/Login'
import SignUp from './components/Navbar/SignUp'
function App() {
  const [signInRoute, setSignInRoute] = useState(false);
  const [singUpRoute, setSignUpRoute] = useState(false);
  return (
    <div>
    {signInRoute ? (
        singUpRoute ? <SignUp /> : <Login singUpRoute={singUpRoute} setSignUpRoute={setSignUpRoute} />
    ) : (
        <Navbar signInRoute={signInRoute} setSignInRoute={setSignInRoute} />
    )}
</div>

  );
}

export default App;
