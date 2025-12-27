import React from 'react'
import Title from './Title'
import assets from '../assets/assets';

const Teams = () => {
    const teamData = [
        {
            name: "Anurag Sen",
            title: "Frontend Developer",
            image: assets.content_icon,
        },
        {
            name: "Aashish Sharma",
            title: "Backend Developer",
            image: assets.work_dashboard,
        },
        {
            name: "Nisha Karki",
            title: "UI/UX Designer",
            image: assets.person_icon,
        },
        {
            name: "Rohit Adhikari",
            title: "Project Manager",
            image: assets.email_icon,
        },
        {
            name: "Suman Thapa",
            title: "QA Engineer",
            image: assets.hero_img,
        },
        {
            name: "Priya Shrestha",
            title: "Digital Marketing Specialist",
            image:assets.bgImage1,
        },
        ];
        console.log(teamData)

  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24
    xl:px-40 pt-30 text-gray-800 dark:text-white'> 
        <Title title='Meet the team' desc='A passionate team of digital experts
        dedicated to your brands success.'/>

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
                teamData.map((team,i)=>(
                    <div key={i} className='flex max-sm:flex-col items-center gap-5 p-4
                    rounded-xl border border-gray-100 dark:border-gray-700 bg-white
                    dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5
                    hover:scale-103 transition-all duration-400'>
                        <img src={team.image} className='w-12 h-12 rounded-full' alt=''/>
                        <div className='flex-1'>
                        <h3 className='font-bold text-sm'>{team.name}</h3>
                        <p className='text-xs opacity-60'>{team.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Teams