
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../API/UseToken';
import Spinner from '../../Common-Items/Spinner';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user)
    const emailRef = useRef('')
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()

    const handleLogin = async e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        await signInWithEmailAndPassword(email, password)
    }

    const handelRestPass = async e =>{
        const email = emailRef.current.value
        await sendPasswordResetEmail(email);
        
        // toast("Wow so easy !")
        if(error1?.message < 5){
            alert("Reset Password Email Sent")
        }
    }
    if(token){
        navigate(from, { replace: true })
    }
    return (
        <>
            <Helmet>
                <title>Login - WareHouse</title>
            </Helmet>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Login</h3>
                        <p className="mt-1 text-sm text-gray-600">Use a Valid Information For Login.</p>
                        <p>New Here ? Please <Link className="font-semibold text-[#214967] hover:text-indigo-500" to="/signup">Sign Up Here</Link></p>
                    </div>
                    <SocialLogin />
                </div>
                
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleLogin}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        
                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
                                                required
                                                ref={emailRef}
                                                type="email"
                                                name="email"
                                                id="email"
                                                autoComplete="email"
                                                className="mt-1 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <input
                                                required
                                                type="password"
                                                name="password"
                                                id="password"
                                                // autoComplete="password"
                                                className="mt-1 focus:ring-indigo-500 border py-2 px-3 hover:border-slate-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                                            />
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                                <div onClick={handelRestPass} className="text-red-400 ml-4 md:ml-5 font-medium cursor-pointer" >Forget Password</div>
                                <p className='text-red-500 ml-5 duration-1000 delay-700 font-semibold'>{error?.message.length > 6 ? error?.message : error1?.message}</p>
                                <div className="px-4 py-3 bg-gray-50 lg:mr-64 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white duration-300 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Sign Up
                                    </button>
                                    <div className='text-center mt-2 font-semibold'>
                                        {
                                            loading && <Spinner text='Your Login Is Processing...' />
                                        }
                                        {
                                            sending && <Spinner text='Your Forget Password Email Is Sending...' />
                                        }
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;