import {assets} from '../assets/assets'
import {motion} from "motion/react"
const Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
    initial={{ opacity:0.2 , y:100 }}
    transition={{ duration:1 }}
    whileInView= {{ opacity:1, y:0 }}
    viewport={{ once:true }}
    >
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI images</h1>
        <p className='text-gray-500 mb-8'>Text to Visuals-the easy way</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_3} alt="" className='w-80 xl:w-96 rounded-lg'/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the Ai-Powered Text to Image Generator</h2>
                <p className='text-gray-600 mb-4'>Easily bring your ideas to life with our free AI image generator. Stunning visuals? unique ideas? Great Imagery? Our tool allows you to see the best in images, all possible with just a few clicks from your end.</p> 
                <p className='text-gray-600'>Do not believe it? Give an idea to the prompt and watch it come to life instantly. Concepts actual or imaginary does not matter before this awesome tool. Powered with AI, expand creativity to infinity and beyond ! </p>

            </div>
        </div>
    </motion.div>
  )
}

export default Description
