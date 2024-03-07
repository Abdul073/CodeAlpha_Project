import React from 'react'
import arrayDestruct  from '../assets/portfolio/arrayDestruct.jpg'
import installNode  from '../assets/portfolio/installNode.jpg'
import navbar  from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather  from '../assets/portfolio/reactWeather.jpg'
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src:arrayDestruct,
            href:'http://nikestoreabdul.netlify.app'
            
        },
        {
            id: 2,
            src:reactParallax,
            href: 'https://github.com/Abdul073/two-good.git'
        },
        {
            id: 3,
            src:navbar,
            href:'https://github.com/Abdul073/restaurent.git'
        },
        {
            id: 4,
            src:reactSmooth,
            href:'https://github.com/Abdul073/profile-card.git'
        },
        {
            id: 5,
            src:installNode,
            href:'https://github.com/Abdul073/yourlogo.git'
        },
        {
            id: 6,
            src:reactWeather,
            href:'https://github.com/Abdul073/Amazone-.git'
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8 '>
                <p className=' text-4xl font-bold inline border-b-4'>Portfolio</p>
                <p className='py-6 '>Check out some of my work right here</p>
            </div>

            


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id, src,href}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg hover:shadow-red-600 duration-300'>
                        <a href={href} target='_blank' rel='noopener noreferrer'>
                    <img src={src}  alt="" className='rounded-md duration-200 hover:scale-105' />
                    </a>
                    <div  className='flex items-center justify-center'>
                        <button  key={href} className='w-1/2 px-6 py-3 m-4 duration-400 hover:scale-105'>Demo/code</button>
                        
                    </div>
                </div>
                ))
            }


                
            </div>
        </div>
    </div>
  )
}

export default Portfolio