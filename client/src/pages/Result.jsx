import {assets} from '../assets/assets'
import './PulsingAnimation.css'
import './DownloadAnimation.css'
import {useState} from 'react'
import {motion} from 'motion/react'

const Result = () => {
  const [image,setImage]= useState(assets.sample_img_1)
  const [isImageLoaded,setIsImageLoaded]= useState(false)
  const [loading,setloading] = useState(false)
  const [input,setInput]=useState('')
  
  const onSubmitHandler= async(e) =>{

  }
  return (
    <motion.form 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}    
    whileInView={{opacity: 1, y: 0}}
    viewport={{ once:true }}
    onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify center items-center'>
      <div>
        <div className='relative'>
          <img src={image} alt="" className='max-w-sm rounded'/>
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? ' w-full transition-all duration-[10s] ' : 'w-0' }`}/>
        </div>
 
        <div className={!loading ? 'hidden': ''}>
          <div className='flex flex-wrap items-center gap-6 mt-10'>
            <section className="flex items-center justify-center w-full h-full">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`dot`} style={{ animationDelay: `${i * 0.2 - 0.3}s` }}></div>
            ))}
            </section>
          </div>
        </div>

      {!isImageLoaded &&
          <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input onChange={e=>setInput(e.target.value)} value={input}
           type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-5 w-25 max-sm:w-20 placeholder-color'/>
          <div className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-gray-800 transition-transform peer-focus:scale-x-100"></div>
          <button type='submit' className='bg-zinc-900 px-10 sm:px-10 py-3 rounded-full'>Generate</button>
          </div>
        }
      </div>
      {isImageLoaded &&
        <div className='flex gap-5 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <button onClick={()=>{setIsImageLoaded(false)}} className="flex items-center justify-center px-5 py-2 bg-[#006aff] border-[5px] border-[#c0dfff] text-white gap-2 rounded-full cursor-pointer transition-all duration-300 hover:border-[#b1d8ff] hover:bg-[#1b7aff] active:border-[5px] group">
            <span className="text-[15px] font-bold tracking-wider">Generate Another</span>
            <span className="pt">
              <svg className="w-[30px] h-[10px] transition-transform duration-900 origin-left group-hover:animate-jello" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 15" fill="none">
              <path fill="white" d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"/>
              </svg>
            </span>
          </button> 

          <a href={image} download className="relative flex h-10 w-[150px] items-center overflow-hidden border border-[#17795E] bg-[#209978] transition-all hover:bg-[#17795E] active:border-[#146c54] active:bg-[#146c54]">
            <span className="button-text translate-x-[22px] font-semibold text-white transition-all">Download</span>
            <span className="button-icon absolute flex h-full w-[39px] translate-x-[109px] items-center justify-center bg-[#17795E] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="w-5 fill-white">
              <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
              <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
              <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
              </svg>
            </span>
          </a>
        </div>
      } 
    </motion.form>
  )
}

export default Result
  