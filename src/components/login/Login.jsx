import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
import ButtonComponenet from '../button/ButtonComponenet';


function Login() {

  const { register, reset, handleSubmit, formState:{errors, isSubmitSuccessful} } = useForm()
  const onSubmit = (data) => console.log(data);
  
  
  useEffect(()=>{
    if(isSubmitSuccessful){
      reset({ username:"", password:""},
           alert("Login Successful"),
           closeLogin()


      )
    }
  },[isSubmitSuccessful])


  const navigate = useNavigate()
  const closeLogin = () => {
    navigate("/")
  }


  return (
    <div className=' flex justify-center items-center  z-10 bg-gray-700 mt-12 rounded-lg py-5 bg-opacity-90 '>
        <div className=' border shadow-lg shadow-gray-300 relative w-1/3 rounded-xl '>

        <ButtonComponenet
       className='text-2xl font-extrabold text-red-700 hover:cursor-pointer flex py-1 px-2 border-r border-b border-gray-200 rounded-xl'
       label='X' 
       onClick={closeLogin}
       />

        <h1 className='text-xl font-mono font-bold text-white mt-2'>Login Here</h1>

            <form  onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-6 mt-6 p-10'>

              <input  
              type='text' 
              placeholder='Username' 
              autoComplete='off'
              className='p-2 text-lg outline-none border-2 border-gray-200 w-full rounded-md'
              {...register("username",{
                required:{value:true, message:"Enter Your Username"},
                maxLength:{value: 15, message:"Max 15 words in Name"},
                minLength:{value: 4, message:"Min 4 words in Name"}
              })}
              />
              {errors.username && 
               <div className='text-red-700 font-bold'>{errors.username.message}</div>
              }

              <input 
              type='text' 
              placeholder='Password'
              autoComplete='off'
              className='p-2 text-lg outline-none border-2 border-gray-200 w-full rounded-md'
              {...register("password",{
                required:{value:true, message:"Enter Your Password"},
                maxLength:{value:15, message:"Max 15 No. in Password"},
                minLength:{value:4, message:"Min 4 No. in Password"}
              })}
              />
              {errors.password && 
              <div className='text-red-700 font-bold'>{errors.password.message}</div>
              }

             <input type="submit" value="Login"
              className='px-3 py-2 text-lg bg-pink-800 text-white hover:bg-pink-600 hover:ease-in-out hover:duration-200 hover:cursor-pointer rounded-md w-full' />
            </form>
        </div>
    </div>
  )
}

export default Login