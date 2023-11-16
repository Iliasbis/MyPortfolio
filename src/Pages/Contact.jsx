import emailjs from '@emailjs/browser'
import React, { useRef, useState } from 'react'
import gmail from '../Assets/gmail.png'
import whatsapp from '../Assets/whatsapp.png'

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qitjebw', 'template_jrqavoa', form.current, 'um7TBb0o38Ld3KohM')
            .then((result) => {
                alert(result.text);
            }, (error) => {
                alert(error.text);
            });
    };


    return (
        <div id='contact' className='w-screen h-full mb-5  flex flex-col items-center justify-evenly'>
            <h1 className='text-3xl sm:text-5xl text-center font-semibold'>Contact <span className='text-teal-400'>Me</span></h1>
            <div className='mt-20 mb-10 flex flex-col md:flex-row justify-between gap-4 md:gap-y-0 md:gap-x-20 w-full px-3 md:px-0 md:w-1/2'>
                <div className='bg-slate-200 flex px-4 items-center justify-start lg:px-8 gap-x-3 sm:gap-x-5 rounded-xl h-16 py-4 w-full lg:w-1/2'>
                    <img src={gmail} alt="gmail" className='object-contain  w-7 h-7 sm:h-10 sm:w-10' />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bissoufailiasjob@gmail.com"  className='my-auto' target='_blank'>
                        <p className='text-xs sm:text-base my-auto'>Bissoufailiasjob@gmail.com</p>
                    </a>
                </div>
                <div className='bg-slate-200 flex px-4 items-center justify-start lg:px-8 gap-x-3 sm:gap-x-5 rounded-xl h-16 py-4 w-full lg:w-1/2'>
         
                    <img src={whatsapp} alt="gmail" className='object-contain w-7 h-7 sm:h-10 sm:w-10' />
                    <a href="https://wa.me/+212651156878" target='_blank' className='my-auto'>
                        <p className='text-xs sm:text-base my-auto'>+212651156878</p>
                    </a>
                </div>
            </div>

            <form onSubmit={sendEmail} ref={form} className='flex flex-col gap-y-5 w-full mt-8 lg:mt-0 px-4 lg:px-0 lg:w-1/2'>
                <input type="text" name='name' placeholder='Your Name' className='w-full  text-sm md:text-base px-3 py-3 rounded-lg outline-none bg-slate-200' required />
                <input type="email" name='email' placeholder='Your Email' className='w-full text-sm md:text-base px-3 py-3 rounded-lg outline-none bg-slate-200' required />
                <input type="text" name='subject' placeholder='Subject' className='w-full text-sm md:text-base px-3 py-3 rounded-lg outline-none bg-slate-200' required />
                <textarea name="message" id="message" cols="30" rows="10" className='w-full text-sm md:text-base px-3 py-3 rounded-lg outline-none bg-slate-200' placeholder='Your Message'></textarea>
                <button type="submit" value="Send Message" className='border text-sm md:text-base px-6 py-3 rounded-lg animated-button'>Send Message</button>
            </form>
        </div>
    )
}
