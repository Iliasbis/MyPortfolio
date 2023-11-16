import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import profile from '../Assets/profile.jpg'
import flutter from '../Assets/flutter.png'

export const Home = () => {
    const [text] = useTypewriter({
        words: ['FULL STACK DEVELOPER', 'MOBILE DEVELOPER', 'UI/UX DESIGNER '],
        loop: {},
    });
    return (
        <div id='/' className='h-screen w-full flex flex-col lg:flex-row justify-between lg:justify-center items-center '>
            <div className='w-full flex flex-col items-start px-8 lg:my-0 sm:mt-24 sm:mb-8 md:mt-24 md:mb-8 mb-14 mt-24 sm:my-24'>
                <p className='text-gray-500  text-sm md:text-lg lg:text-xl mb-7'>Hello, I am <br />
                    <span className='text-black text-xl md:text-2xl lg:text-7xl  w-full'>ILias bissoufa</span>
                </p>
                <span className='bg-gray-300 text-xl md:text-3xl lg:text-5xl px-5 rounded-md py-3 text-black'>{text}<Cursor /> </span>
            </div>
            <div className='w-full flex justify-center  '>
                {/* <div className='rounded-full  shadow-md shadow-gray-500 absolute z-auto opacity-20 top-44  bg-center bg-contain bg-no-repeat bg-gray-400 w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] border-gray-500 border-2' ></div> */}
                <div className='rounded-full z-40  bg-profile bg-center bg-contain bg-no-repeat xs:w-60 xs:h-60 bg-gray-400 w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] border-gray-500 border-2' >
                </div>
            </div>
            <div className='w-full h-full flex justify-end '>
                <a href="https://www.youtube.com/@iliasbis2003" target='_blank'>
                    <div className='w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-youtube bg-center bg-contain bg-no-repeat animate-slow-animation absolute top-[600px] xs:left-1 md:top-[700px]  lg:top-[120px] lg:right-32 lg:left-auto left-1/4 bg-white rounded-full text-center'>
                    </div>
                </a>
                <a href="https://github.com/Iliasbis" target='_blank'>
                    <div className='w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-github bg-center bg-contain bg-no-repeat animate-slow-animation absolute  right-0 left-0 xs:left-7   lg:left-auto top-[580px]   lg:right-16 lg:top-[320px] bg-white rounded-full text-center'>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/ilias-bissoufa/" target='_blank'>
                    <div className='w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-linkedin bg-center bg-contain bg-no-repeat animate-slow-animation absolute lg:top-[520px] xs:right-7 top-[580px] right-0 lg:right-32 bg-white rounded-full text-center'>
                    </div>
                </a>
                <a href="https://wa.me/+212651156878" target='_blank'>
                    <div className='w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-whatsapp bg-center bg-contain bg-no-repeat animate-slow-animation absolute lg:top-[720px] top-[600px] md:top-[700px] xs:right-1  right-1/4 lg:right-16 bg-white rounded-full text-center'>
                    </div>
                </a>

            </div>
        </div>
    )
}
