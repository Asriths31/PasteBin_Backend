

export function pasteValidation(paste){
   const{maxViews,viewsCount,expiryDate}=paste
    const now=new Date()
    if(expiryDate&&expiryDate<now){
        return {isValid:false,message:"Paste Is Expired"}
    }

    if(maxViews&&maxViews <= viewsCount){
        return {isValid:false,message:"The View Limit is Exceeded"}
    }

    return {isValid:true,message:"Paste is valid"}
}