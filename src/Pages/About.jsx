import React from 'react'


export const About = () => {
  const handleOpenResume = () => {
    // Replace 'your_resume.pdf' with the actual filename or URL of your resume
    window.open('/Resume/cv ilias bissoufa.pdf', '_blank');
  };
  return (
    <div id='about' className='w-full h-full py-32 flex flex-col justify-between items-center bg-slate-200 sm:px-16'>
      <h1 className='text-3xl sm:text-5xl font-semibold mb-6'>About <span className='text-teal-400'>Me</span></h1>
      <div className='flex flex-col-reverse items-center lg:items-center lg:flex-row '>
        <div className='flex flex-col justify-center w-full px-8 sm:px-14'>
          <h3 className='text-lg sm:text-xl font-semibold mb-6 '>ILias bissoufa</h3>
          <p className='text-gray-500 text-sm sm:text-lg'>I'm a dynamic full-stack developer with two years of focused study and one year of hands-on experience. Specializing in crafting responsive web and mobile applications, I bring a blend of academic knowledge and practical expertise to deliver exceptional digital solutions. Passionate about staying at the forefront of technology trends, I thrive on creating seamless and user-centric experiences. Ready to take on new challenges, my goal is to continue pushing the boundaries of innovative development.</p>
          <button onClick={handleOpenResume} className='mt-9 sm:mt-16 self-start border px-6 py-3 rounded-lg animated-button'><a href="../Assets/Cv/cv ilias bissoufa.pdf" target='_blank'>Resume</a> </button>

        </div>
        <div className='bg-profile w-60 h-60 mb-10 lg:mb-0 lg:w-56 lg:h-48 bg-center rounded-full bg-white bg-no-repeat bg-contain'></div>
      </div>
      <div></div>
    </div>
  )
}
