import ratelimit from "../config/upstash.js"


const ratelimiter = async (req,res,next)=>{
    try {
        const {success} = await ratelimit.limit("my-rate-limit")

        if(!success){
            return res.status(429).json({message : "Too many requests, Please try again Later"})
        }
        next();
    } catch (error) {

        res.status(500).json({message:"Internal server error in rate limiter middleware "})
        console.log("Error in the rate limiter middleware ",error)
     
    }
}

export default ratelimiter;