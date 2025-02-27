import userModel from "../models/userModel.js"
import FormData from 'form-data'
import axios from 'axios'

const CLIP_API= process.env.CLIPDROP_API
export const generateImage = async(req,res) =>{
    try{
        const {userId,prompt} = req.body
        const user = await userModel.findById(userId)

        if(!user || !prompt){
            return res.json({ success:false , message: 'Missing Details' })
        }

        if(user.creditBalance === 0 || userModel.creditBalance < 0 ){
            return res.json({ success:false , message:'Insufficient Credit Balance' , creditBalance:user.creditBalance })
        }

        const formData = new FormData()
        formData.append('prompt',prompt)

        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',formData, {
            headers: {
                'x-api-key': CLIP_API,
            },
            responseType: 'arraybuffer'
        })
        
        const based64Image = Buffer.from(data,'binary').toString('base64')

        const resultImage = `data:image/png;base64,${based64Image}`
        
        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })

        res.json({success:true, message: "Image Generated", creditBalance: user.creditBalance - 1, resultImage })

    }catch(error){
        console.log(error.message)
        res.json({success:false, message: error.message})
    }
}
