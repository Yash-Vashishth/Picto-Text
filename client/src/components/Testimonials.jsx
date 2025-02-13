import {assets} from '../assets/assets'
import './Testimonials.css'
import {motion} from "motion/react"
const Testimonials = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-20 py-12  '
    initial={{ opacity:0.2 , y:100 }}
    transition={{ duration:1 }}
    whileInView= {{ opacity:1, y:0 }}
    viewport={{ once:true }}
    >
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonials</h1>
      <p className='text-gray-500 mb-12'>What Users Say </p>
      <div className='flex flex-wrap gap-10 items-center'>
        <div className="card">
          <img src={assets.prof_img_1} alt=""/>
          <div className="card__content">
            <p className="card__title">Joe Jackman</p>
            <p className="card__description">
            I have been using Picto-Text for nearly two years and it has been incredibly user-friendly, making work easier.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={assets.prof_img_2} alt=""/>
          <div className="card__content">
            <p className="card__title">Richard Nelson</p>
            <p className="card__description">
              My use for Picto-text has made my job easier and opened me to new horizons.
            </p>
          </div>
        </div>   

        <div className="card">
          <img src={assets.prof_img_3} alt=""/>
          <div className="card__content">
            <p className="card__title">Hugh Jackson</p>
            <p className="card__description">
              Fantastic app ! I was searching for something like this to make my tasks easier!!
            </p>
          </div>
        </div>  
      </div>       
    </motion.div>
  )
}

export default Testimonials