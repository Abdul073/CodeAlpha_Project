import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Welcome to my corner of the web! I'm a dedicated web developer with a passion for crafting exceptional digital experiences. With a blend of creativity and technical prowess, I specialize in transforming ideas into beautifully functional websites and applications. My journey in web development began with a curiosity-driven exploration of coding languages and design principles, and it has since evolved into a relentless pursuit of mastery in the field.</p>
            <br />

            <p className='text-xl'>
            Whether it's designing intuitive user interfaces, optimizing performance, or solving complex technical challenges, I approach every project with enthusiasm and attention to detail. My goal is not just to meet expectations but to exceed them, delivering solutions that inspire and delight users. Let's collaborate to bring your vision to life and create something truly extraordinary together.
            </p>
        </div>
    </div>
  )
}

export default About