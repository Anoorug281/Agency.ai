import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'

const Contactus = () => {

    const onSubmit = async(e)=>{
        e.preventDefault()
        const formData =new FormData(e.target)

        formData.append("access_key","612e1f5e-6ac7-423a-8163-de2e801872a1")

        try {
            const res = await fetch('https://api.web3forms.com/submit',{
            method:"POST",
            body:formData
        })

        const data = await res.json()

        if(data.success){
            toast.success("thank you for your submission!")
            e.target.reset()
        }else{
            toast.error(data.message)
        }
        } catch (error) {
            toast.error(error.message)
        }

        
    }
  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 mr-10 text-gray-700 dark:text-white'>
        <Title title='Reach out to us' desc='From strategy to execution, we craft
        digital solutions that move your business forward.'/>

        <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
            <div className=''>
                <p className='mb-2 text-sm font-medium'>Your name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300
                 dark:border-gray-600'>
                    <img src={assets.person_icon} alt=''/>
                    <input type='text' name='name' placeholder='Enter your name' className='w-full
                    p-3 text-sm outline-none' required/>
                </div>
            </div>
            <div className=''>
                <p className='mb-2 text-sm font-medium'>Email id</p>
                <div className='flex pl-3 rounded-lg border border-gray-300
                 dark:border-gray-600'>
                    <img src={assets.email_icon} alt=''/>
                    <input type='email' name='email' placeholder='Enter your email' className='w-full
                    p-3 text-sm outline-none' required/>
                </div>
            </div>
            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea rows={8} name='message' placeholder='Enter your message' className='w-full
                p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required/>
            </div>
            <button type="submit" className='w-max flex gap-2 bg-primary text-white
            text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                Submit <img src={assets.arrow_icon} alt='' className='w-full'/>
            </button>
        </form>
    </div>
  )
}

export default Contactus