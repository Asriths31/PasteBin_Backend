import { pasteValidation } from "../helpers/pasteValidation.js";
import { PasteDocs } from "../model.js";


export async function getPaste(req,res) {
    try{
        const {id}=req.params

        const foundPaste = await PasteDocs.findById(id)

        if (!foundPaste) {
            return res.status(404).json({message: "Paste Not Found"})
        }
        const validate=pasteValidation(req,foundPaste)
        if(!validate.isValid){
            return res.status(404).json({message:validate.message})
        }

        foundPaste.viewsCount+=1
        await foundPaste.save()
        return res.status(200)
            .json({
                content:foundPaste.content,
                remaining_views:foundPaste.maxViews-foundPaste.viewsCount,
                expires_at:foundPaste.expiryDate
            })
    }
    catch (err) {
        console.error("Error in get Paste",err.message)
        return res.status(500).json({ error: "Internal Server Error" })
    }
}