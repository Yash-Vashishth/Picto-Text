import { motion } from "motion/react"
import {assets} from '../assets/assets'
import {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import {useNavigate} from 'react-router-dom'
const Header = () => {
  const {user,setShowLogin}=useContext(AppContext)
  const navigate= useNavigate()

  const onClickHandler= ()=>{
    if (user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }    
  }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}    
    whileInView={{opacity: 1, y: 0}}
    viewport={{ once:true }}
    >
      <motion.div
      initial={{opacity:0, y:-20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay:0.2 ,duration:0.8}}
      >
        <button className="relative flex items-center justify-center w-75 h-10 border-2 border-white bg-white rounded-md p-1 cursor-pointer">
        <span className="relative flex items-center justify-center w-85 h-10 border-4 border-black bg-white rounded-sm text-black text-xl font-semibold shadow-[0_4px_2px_1px_rgba(255,255,255,0.8)] transition-all duration-500 hover:translate-y-2 hover:shadow-none">
            Best Text to Image Generator
        </span>
        </button>
      </motion.div>

      <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.4 ,duration:2}}      
      >Turn text to <span className='text-blue-600'>image</span>, in seconds.</motion.h1>

      <motion.p className='text-center max-w-xl mx-auto mt-5 '
      initial={{ opacity:0 , y:20}}
      animate={{ opacity:1 , y:0 }}
      transition={{delay:0.6 ,duration:0.8}}       
      > Experience utility remastered using AI. Turn thoughts to pictures in seconds- type and watch the magic happen. </motion.p>

      <motion.button type="button" onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
      whileHover={{ scale:1.05 }}
      whileTap={{ scale:0.95 }}
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ default:{duration:0.5} , opacity:{delay:0.8,duration:1} }}
      >
        Generate Images
        <img className='h-6' src={assets.star_group} alt=""/></motion.button>

      <motion.div className=' flex flex-wrap justify-center mt-16 gap-3'
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ delay:1 , duration:1 }}
      >
        {Array(6).fill('').map((item,index)=>(
            <motion.img 
            whileHover={{ scale:1.05 , duration:0.1 }}
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index%2==0 ? assets.sample_img_1 : assets.sample_img_2} alt="" key={index} width={70} />
        ))}
      </motion.div>

      <motion.p 
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ delay:1.2 , duration:0.8 }}
      className='mt-2 text-neutral-600'>Generated images from Picto-Text</motion.p>

    </motion.div>
  )
}

export default Header
