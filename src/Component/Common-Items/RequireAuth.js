import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from './Spinner';

const RequireAuth = ({children}) => {
    const [user , loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);


    let location = useLocation();
    if(loading){
        return <div className='my-48'><div className="flex justify-center "><Spinner/></div></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(user.providerData[0]?.providerId ==='password' && !user.emailVerified){
        return <div className=' text-center my-40'>
                    <h3 className='text-3xl font-semibold'>Your Email is not verified</h3>
                    <button className='bg-neutral-400 p-1 mt-12 w-1/4 rounded font-semibold hover:bg-green-400 hover:text-white duration-300'
                        onClick={ async ()=>{
                        await sendEmailVerification();
                        // toast('Email Sent')
                        alert('Email Sent')
                        }
                    }> Verify Email</button>
                    {/* <ToastContainer/> */}
                </div>
    }
    return children
};

export default RequireAuth;