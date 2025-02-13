import { useContext } from 'react'
import {plans} from '../assets/assets'
import {AppContext} from '../context/AppContext'
import {motion} from 'motion/react'
const BuyCredit = () => {
  const {user} = useContext(AppContext)
  return (
    <motion.div className='min-h-[80vh] text-center pt-14 mb-10'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}    
    whileInView={{opacity: 1, y: 0}}
    viewport={{ once:true }}
    >
      <div className='text-center justify-center mb-5 ml-113'>
        <button className="group relative flex items-center border-none bg-none cursor-pointer">
          <span className="relative uppercase text-black text-[14px] tracking-[4px] pr-4 pb-[7px] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:ease-out group-hover:before:scale-x-100 before:origin-bottom-right group-hover:before:origin-bottom-left">
            Our Plans
          </span>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[30px] h-[10px] -translate-x-2 transition-transform duration-300 group-hover:translate-x-0 active:scale-90"
          viewBox="0 0 46 16"
          >
          <path d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
          </svg>
        </button>
      </div>
      <h1 className='text-center text-3xl font-medium mb-5 sm:mb-10'>Choose the plan</h1>

      {plans.map((item,index)=>(
        <div key={index}>

          <div className="flex flex-col border border-color-black mb-5 bg-white rounded-3xl">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left"><div>
                <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                  {item.id}
                </h2>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </div>
              <div className="mt-6">
                <p>
                  <span className="text-5xl font-light tracking-tight text-black">
                    ${item.price} / {item.credits} credits
                  </span>
                  <span className="text-base font-medium text-gray-500"> /mo </span>
                </p>
              </div>
              </div>
            </div>
            <div>
          <div className="flex px-6 pb-8 sm:px-8">
            <button className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" >
            {user === null ? 'Get Started' : user ? 'Purchase' : 'Get Started'}
            </button>
          </div>        
        </div>
        </div>
      </div>
      ))}
    </motion.div>
  )
}

export default BuyCredit
