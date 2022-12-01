import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import {GoogleAuthProvider} from 'firebase/auth'
import { IconName } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [error, setError] = useState('');
    const {signIn, loader} = useContext(AuthContext);
    const {providerLogin} = useContext(AuthContext);
    const {loginUserEmail, setLoginUserEmail} = useState('');
    const [token] = useToken(loginUserEmail);
    const googleAuthProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if(token){
        navigate(from, {replace: true});
    }
  
    const handleGoogleSignIn = () =>{
      providerLogin(googleAuthProvider)
      .then(result =>{
        const user = result.user;
        toast('User Login Successfully')
        navigate(from, {replace: true});
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })
    }
  
    const handleSubmit = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      signIn(email, password)
          .then(result =>{
              const user = result.user;
              form.reset();
              setError('');
              setLoginUserEmail(email);
          })
          .catch(error => {
              console.error(error);
              setError(error.message);
          })
    }

    return (
        <div className='text-center mt-32 mb-44'>
            <div className='flex justify-around w-56 mx-auto'>
                <div>
                <h3 className='uppercase mb-3 -ml-10'>login</h3>
                </div>
                <div>
                <Link to='/register'>
                <button className="btn btn-xs ml-10">Create An Account</button>
                </Link>
                </div>

            </div>
            <Form onSubmit={handleSubmit}>
                <div>
                <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs required:" />
                </div>
                <div className='my-5'>
                <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs required:" />
                </div>
                <div>
                    <button className='bg-black px-16 py-3 text-white rounded-md' type='submit'>Login</button>
                </div>
                <div className="divider w-52 mx-auto">OR</div>
                <div className='mx-auto p-3 rounded-md' style={{border: "2px solid", width: '280px'}}>
                    <button onClick={handleGoogleSignIn}>Login with Google</button>
                </div>
            </Form>
        </div>
    );
};

export default Login;