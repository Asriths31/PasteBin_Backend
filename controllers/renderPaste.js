import { pasteValidation } from "../helpers/pasteValidation.js";
import { renderHtml } from "../helpers/renderHtml.js";
import { PasteDocs } from "../model.js";


export async function renderPaste(req,res){
    try{
        const {id}=req.params

        console.log("id of the doc in render", id);

        const foundPaste = await PasteDocs.findById(id)

        console.log("foundPaste", foundPaste)

        if (!foundPaste) {
            return res.status(404).json({message: "Paste Not Found"})
        }

        const validate=pasteValidation(req,foundPaste)
        if(!validate.isValid){
            return res.status(404).json({ message: validate.message })
        }

        foundPaste.viewsCount+=1
        await foundPaste.save()
        res.setHeader(
            "Content-Security-Policy",
            "default-src 'self'; script-src 'self'"
        );
        return res.status(200)
            .send(renderHtml(foundPaste.content))
    }
    catch (err) {
        console.error("Error in render Paste ",err.message)
        return res.status(500).json({message: "Internal Server Error" })
    }
}