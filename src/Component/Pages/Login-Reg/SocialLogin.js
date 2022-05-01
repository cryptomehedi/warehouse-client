import React from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import googleLogo from '../../../Img/Social/google-logo.png'
import facebookLogo from '../../../Img/Social/facebook-logo.png'
import gitHubLogo from '../../../Img/Social/github-logo.png'
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [user] = useAuthState(auth)
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div style={{height: '2px'}} className='bg-slate-400 w-1/2'></div>
                <p className='mx-2'>or</p>
                <div style={{height: '2px'}} className='bg-slate-400 w-1/2'></div>
            </div>
            <div className='items-center'>
                <div className='flex justify-center w-screen md:w-full my-3 '><div onClick={()=>signInWithGoogle()} className='bg-neutral-400 p-1 px-3 rounded font-semibold hover:bg-green-400 hover:text-white duration-300 text-center w-2/3 flex justify-center items-center'> <img className='w-7 mr-2' src={googleLogo} alt="" /><p>Google Sign In</p></div></div>
                <div className='flex justify-center w-screen md:w-full my-3 '><div onClick={()=>signInWithFacebook()} className='bg-neutral-400 p-1 px-3 rounded font-semibold hover:bg-green-400 hover:text-white duration-300 text-center w-2/3 flex justify-center items-center'> <img className='w-7 mr-2' src={facebookLogo} alt="" /><p>FB Sign In</p></div></div>
                <div className='flex justify-center w-screen md:w-full my-3 '><div onClick={()=>signInWithGithub()} className='bg-neutral-400 p-1 px-3 rounded font-semibold hover:bg-green-400 hover:text-white duration-300 text-center w-2/3 flex justify-center items-center'> <img className='w-7 mr-2' src={gitHubLogo} alt="" /><p>GitHub Sign In</p></div></div>
            </div>
            
        </div>
    );
};

export default SocialLogin;