import React, { useState } from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';
import '../styles/LandingPage.css'


const LandingPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  function loginHandler() {
    setIsSignIn(!isSignIn);
    
  }

  return (
    <div className='home'>
      <div className='title'>
        <h1>Price Watch</h1>
        <p>Your Personalized Price Tracking Hub
          <br />Track Amazon prices effortlessly! 
          <br />Enter the product URL, set your price Upper Limit, 
          <br />and get notified when it hits your target.
        </p>
      </div>
      <div className='separator'></div>

      <div className='form-container'>
        {isSignIn ? <LogIn /> : <SignUp />}
        {!isSignIn && (
          <div>
            <span>
              <p>Already have an account?</p>
            </span>
            <span>
            
              <button onClick={loginHandler}>Log In</button>
           
            </span>
          </div>
        )}
        {isSignIn && (
          <div>
            <span>
              <p>Don't have an account?</p>
            </span>
            <span>
              <button onClick={loginHandler}>Sign Up</button>
            </span>
          </div>
        )}
      </div>

      
    </div>
  );
}

export default LandingPage;
