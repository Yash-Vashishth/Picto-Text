import {useContext} from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import {AppContext} from '../context/AppContext'
const Navbar = () => {
    const {user , setShowLogin , logout , credit } = useContext(AppContext);
    const navigate= useNavigate()
    return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>
      <img src={assets.logo1} alt="" className= 'w-28 sm:w-32 lg:w-40'/>
      </Link>

    <div>
        {
        user ?
        <div className='flex items-center gap-2 sm:gap-3'>
            <button onClick={()=> navigate('buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hoverscale:scale-105 transition-all duration-700'>
                <img className='w-5' src={assets.credit_star} alt="" />
                <p className='text-xs sm:txt-sm font-medium text-gray-600 '>Credits Left : {credit}</p>
            </button>
            <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
            <div className='relative group'>
                <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                        <li onClick={logout} className=' py-1 px-2 cursor-pointer pr-10'>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
        :
        <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={()=>navigate('/buy')} className='cursor-pointer'>Pricing</p>
            <button onClick={()=>setShowLogin(true)} className="group relative inline-block border-2 border-black bg-transparent px-7 py-2 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer">
                <span className="absolute left-6 top-1/2 h-[1px] w-[25px] -translate-y-1/2 bg-black transition-all duration-300 ease-linear group-hover:w-[15px] group-hover:bg-white"></span>
                <span className="pl-8 text-left transition-all duration-300 ease-in-out group-hover:pl-6">Login</span>
                <span className="absolute left-2.5 top-[-2px] h-[1px] w-[25px] bg-gray-300 transition-all duration-500 ease-out group-hover:w-0 group-hover:left-[-2px]"></span>
                <span className="absolute bottom-[-2px] right-[30px] h-[1px] w-[25px] bg-gray-300 transition-all duration-500 ease-out group-hover:w-0 group-hover:right-0"></span>
                <span className="absolute bottom-[-2px] right-[10px] h-[1px] w-[10px] bg-gray-300 transition-all duration-500 ease-out group-hover:w-0 group-hover:right-0"></span>
            </button>
        </div>
        }
    </div>
    </div>
  )
}

export default Navbar
