import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { login,signUp } from '@actions/AuthAction';
import {Alert} from '@mui/material'


const initialValue={
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : ""
}

const Auth = () => {
    const [isSignUp,setIsSignUp]=useState(false);
    const [data,setData]=useState(initialValue);
    const [confirmPass,setConfirmPass]=useState(false);
    const dispatch=useDispatch();
    const loading=useSelector(state=>state.authReducer.loading);

    const handleChange=(e)=>{
        setData({...data,[e.target.name] : e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(isSignUp){
            data.password===data.confirmPassword ? dispatch(signUp(data)) : setConfirmPass(true)
        }
        else{
            data.password===data.confirmPassword ? dispatch(login(data)) : setConfirmPass(true);
        }
    }
    const resetForm=()=>{
        setConfirmPass(false);
        setData(initialValue);
    }

    return ( 
        
        <div className='flex flex-col justify-center items-center min-h-[100vh] gap-8 lg:flex-row'>
            <div className="flex gap-4 items-center">
                <div className='flex flex-col gap-4'>
                    <div className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#804dee] to-[#3C335000]'>Safe Data</div>
                    <div className='font-bold text-sm'>Keep user data private, safe and secure..</div>
                </div>
            </div>
            <div className='bg-[#ffffffd4] rounded-xl p-4'>
                <form autoComplete='off' className='flex flex-col gap-4 justify-center items-center' onSubmit={handleSubmit}>
                    <h3 className='text-xl'><b>{isSignUp ? "Sign Up" : "Log In"}</b></h3>
                    {isSignUp ? (
                        <div className='flex gap-2'>
                        <input type="text" placeholder='First Name' name='firstName' className='inp w-48' onChange={handleChange} value={data.firstName}/>
                        <input type="text" placeholder='Last Name' name='lastName' className='inp w-48' onChange={handleChange} value={data.lastName}/>
                    </div>
                    ) : null}
                    <div className='w-full'>
                        <input type="text" placeholder='Email ID' name='email' className='inp w-full' onChange={handleChange} value={data.email}/>
                    </div>
                    <div className='flex gap-2'>
                        <input type="password" placeholder='Password' name='password' className='inp w-48' onChange={handleChange} value={data.password}/>
                        <input type="password" placeholder='Confirm Password' name='confirmPassword' className='inp w-48' onChange={handleChange} value={data.confirmPassword}/>
                    </div>
                    <div className='w-full'>
                        {confirmPass ? <Alert severity="error" className='w-full' >Check your password</Alert> : null}
                    </div>
                    <div className='text-[12px] cursor-pointer hover:underline hover:text-orange-500' onClick={()=>{setIsSignUp(!isSignUp);resetForm()}}>
                        {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                    </div>
                    <button type='submit' className='btn rounded-md text-white px-7 py-3'>{loading ?"Loading" : isSignUp ? "Sign Up" : "Log In"}</button>
                </form>
            </div>
        </div>
    );
}
 
export default Auth;

