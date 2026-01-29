import { PasteDocs } from "../model.js";

export async function createPaste(req,res){
    try{
        const{content,ttl_seconds,max_views}=req.body;

        if(!content||!content.trim()){
            return res.status(400).json({message:"Text Cannot be empty"})
        }

        if(typeof(ttl_seconds)!=="number"){
            return res.status(400).json({message:"Expiry of paste should be a number"})
        }

        if(typeof(max_views)!=="number"){
            return res.status(400).json({message:"max view limtit should be a number"})
        }
        const doc={content}

        if(ttl_seconds>0){
            doc.expiryDate=new Date(Date.now()+ttl_seconds*1000);
            console.log("dateee",Date.now())
        }
        if(max_views>0){
            doc.maxViews=max_views;
        }

        const createdPaste=await PasteDocs.create(doc)
        return res.status(201)
        .json({
            message:"Paste Created Successfully",
            id:createdPaste._id,
            url:`${process.env.DEPLOYED_URL}/p/${createdPaste._id}`
            
        })
    }
    catch(err){
        console.error("Paste Creation Failed",err.message)
       return res.status(500).json({message:"Internal Server Error! Paste Creation Failed"})
    }
}