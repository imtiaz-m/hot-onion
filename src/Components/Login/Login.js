import React from 'react';

import Auth from './UseAuth';
import { Link } from 'react-router-dom';


const Login = () => {
  const auth = Auth();
  return (
    <div>

      {
        auth.user ? <button className="sign-out"
          onClick={auth.signOut}>Sign Out</button> :
          <button className="sign-in"
            onClick={auth.signWithGoogle}>Sign In</button>
      }








      <Link to="/signup"> <button className="sign-up">Sign Up</button></Link>



    </div>
  );
};

export default Login;