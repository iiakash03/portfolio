import React from 'react'
import github from '../assets/github.png';
import javascript from '../assets/javascript.png';
import Node from '../assets/nodejs.png'
import react from '../assets/physics.png'
import mongodb from '../assets/database-storage.png'
import java from '../assets/java.png'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies i have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt="Github icon"/>
                    <p>
                        Javascript
                    </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Github icon"/>
                    <p>
                        Node JS
                    </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="Github icon"/>
                    <p>
                        ReactJS
                    </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={mongodb} alt="Github icon"/>
                    <p>
                        MongoDB
                    </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="Github icon"/>
                    <p>
                        Github
                    </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={java} alt="Github icon"/>
                    <p>
                        Java
                    </p>
                </div>
            </div>


        </div>
      
    </div>
  )
}

export default Skills
