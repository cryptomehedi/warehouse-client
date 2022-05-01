import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Switch } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import Spinner from '../../Common-Items/Spinner';
import SocialLogin from './SocialLogin';

const Register = () => {
    const [ createUserWithEmailAndPassword, user, loading, error1 ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const [check , setCheck] = useState(false)
    const [errorPass , setErrorPass] = useState('')
    const [errorCon , setErrorCon] = useState('')
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()

    const handleEmailSubmit = async e => {
        e.preventDefault();

        const displayName= e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirm = e.target.confirmPassword.value

        if(password.length > 7){
            if(password === confirm) {
                setErrorPass('')
                setErrorCon('')
                await  createUserWithEmailAndPassword(email , password)
                await updateProfile({ displayName });
                e.target.reset()
                alert(`Congratulations ! "${displayName}" Please Confirm Your Email Address`)
                
            }else{
                setErrorCon("Password Didn't Matched")
                setErrorPass('')
            }
        }else{
            setErrorPass('Password Must Be 8 Characters')
            setErrorCon('')
        }
    }
    if(user){
        navigate(from, { replace: true })
    }
    return (
        <>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                <div className="border-t border-gray-200" />
                </div>
            </div>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Register</h3>
                        <p className="mt-1 text-sm text-gray-600">Use a Valid Information where you can receive mail & Future Information.</p>
                        <p>Already Registered <Link className="font-semibold text-[#214967] hover:text-indigo-500" to="/login">Login Here</Link></p>
                        <SocialLogin/>
                    </div>
                </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleEmailSubmit}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Your name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="name"
                                                className="mt-1 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
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
                                                type="password"
                                                name="password"
                                                id="password"
                                                // autoComplete="password"
                                                className="mt-1 focus:ring-indigo-500 border py-2 px-3 hover:border-slate-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                                            />
                                            <p> <small>Password Must Be 8 Characters</small> </p>
                                            <p className='text-red-500 mt-2 ml-1 md:ml-10 font-semibold'>{errorPass}</p>
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                // autoComplete="password"
                                                className="mt-1 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                                            />
                                            <p className='text-red-500 mt-2 ml-1 md:ml-10 font-semibold'>{errorCon}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <Switch onClick={() =>setCheck(!check)} className='ml-1 md:ml-10 wrap' shape="fill"> <span className={check ? "text-green-400" : "text-red-600"}>Accept WareHouse Terms & Conditions</span> </Switch>
                                <p className='text-red-500 mt-2 ml-1 md:ml-10 font-semibold'>{error1?.message.length > 6 ? error1?.message : error2?.message}</p>
                                <div className="px-4 py-3 lg:mr-64 bg-gray-50 text-right sm:px-6">
                                    <button
                                        disabled={!check}
                                        type="submit"
                                        className={check ? 
                                            "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            : 
                                            "inline-flex disabled:opacity-50 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600  cursor-not-allowed"
                                        }
                                    >
                                        Sign Up
                                    </button>
                                    <div className='text-center mt-2 font-semibold'>
                                        {
                                            loading && <Spinner text='Your Registration Is Processing...' />
                                        }
                                        {
                                            updating && <Spinner text='Your Registration Is Processing...' />
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

export default Register;