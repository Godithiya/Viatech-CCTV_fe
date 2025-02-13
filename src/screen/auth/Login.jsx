import React, { useState } from 'react'
import isolationMode from '../../assets/IsolationMode.png'
import logoViatech from '../../assets/logoViatech.svg'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='w-screen h-screen bg-[#191919] overflow-hidden'>
      <div className="size-full bg-transparent relative flex justify-center items-center">
        <img src={isolationMode} alt="" className='w-[40%] absolute top-0 right-0'/>
        <img src={isolationMode} alt="" className='w-[40%] absolute bottom-0 left-0 rotate-180'/>
        <form>
            <div className="w-[626px] h-[492px] bg-[#131313A6] rounded-3xl flex flex-col justify-center items-center gap-4 ">
                <img src={logoViatech} alt="" className='mb-16'/>
                <div className="w-80 h-auto flex flex-col items-start gap-2 text-white">
                    <label htmlFor="username" className='text-sm'>Username</label>
                    <input type="text" id='username' className='w-full h-10 bg-[#D9D9D9CC] outline-none px-2 rounded-md text-black '/>
                </div>
                <div className="w-80 h-auto flex flex-col items-start gap-2 text-white relative">
                    <label htmlFor="password" className='text-sm'>Password</label>
                    <input type={showPassword ? "text" : "password"} id='password' className='w-full h-10 bg-[#D9D9D9CC] outline-none px-2 rounded-md text-black '/>
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-10 text-gray-500 cursor-pointer"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <button type='submit' className='w-80 h-11 bg-[#3776EB] rounded-md text-white text-sm mt-8'>Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
