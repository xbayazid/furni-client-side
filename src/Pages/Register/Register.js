import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [error, setError] = useState('')
    const {providerLogin} = useContext(AuthContext);
    const {createUser, updateUser} = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token]=useToken(createdUserEmail);
    const navigate = useNavigate();

  if(token){
    navigate('/');
  }
  
    const handleGoogleSignIn = () =>{
      providerLogin(googleAuthProvider)
      .then(result => {
          const user = result.user;
          console.log(user);
          toast('User Registered Successfully')
      })
      .catch(error => {
          console.error(error);
          setError(error.message);
      })
  }
  
  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)
    
    const userInfo = {
        displayName: name
    }
  
    createUser( email,password)
          .then(result =>{
              const user = result.user;
              console.log(user);
              toast('User Created Successfully')
              
              updateUser(userInfo)
              .then(() =>{
                saveBuyer(name, email);
              })
              .catch(error => console.log(error))
              form.reset();
              setError('');
          })
          .catch(error => {
              console.error(error);
              setError(error.message)
          })
  
  }

  const saveBuyer = (name, email) =>{
    const buyer = {name, email};
    fetch('https://furni-server-side-bayaziddeveloper-gmailcom.vercel.app/buyers', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(buyer)
    })
    .then(res => res.json())
    .then(data =>{
        setCreatedUserEmail(email);
    })
  }



    return (
        <div className='text-center my-32'>
            <div className='flex justify-around w-56 mx-auto'>
                <div>
                <h3 className='uppercase mb-3 -ml-10'>Register</h3>
                </div>
                <div>
                <Link to='/login'>
                <button className="btn btn-xs ml-10">Login</button>
                </Link>
                </div>

            </div>
            <Form onSubmit={handleSubmit}>
                <div>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs required" />
                </div>
                <div className='my-5'>
                <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs required" />
                </div>
                <div className='my-5'>
                <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs required" />
                </div>
                <div>
                    <button className='bg-black px-16 py-3 text-white rounded-md' type='submit'>Register</button>
                </div>
                <div className="divider w-52 mx-auto">OR</div>
                <div className='mx-auto p-3 rounded-md' style={{border: "2px solid", width: '280px'}}>
                    <button onClick={handleGoogleSignIn}>Register with Google</button>
                </div>
            </Form>
        </div>
    );
};

export default Register;