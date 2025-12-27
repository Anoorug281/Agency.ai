import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {

  const workData = [
    {
      title:'Mobile app marketing',
      desc:'We turn bold ideas into powerful digital solutions that connect, engage...',
      image: assets.work_mobile_app,
    },
    {
      title:'Dashboard management',
      desc:'We help you execute your plan and deliver results.',
      image: assets.work_dashboard,
    },
    {
      title:'Fitness app promotion',
      desc:'We help you create a marketing strategy that drives results.',
      image: assets.work_fitness_app,
    },

  ]

  return (
    <>
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12
     lg:px-24 xl:px-40  pt-30 text-gray-700 dark:text-white'>
      <Title title= 'Our latest Work' desc='From strategy to execution,
      we craft digital solutions that move your business forward.' />
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mx-auto px-4">
      {
      workData.map((work,index)=>(
        <div key={index} className='hover:scale-[1.02] duration-500 transition-all cursor-pointer'>
          <img src={work.image} className='w-full rounded-xl' alt='' />
          <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
          <p className='text-sm opacity-60 w-5/6'>{work.desc}</p>
        </div>
      ))
      }
    </div>
    </>
  ) 
}

export default OurWork