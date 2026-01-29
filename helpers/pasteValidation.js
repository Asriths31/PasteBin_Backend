

export function pasteValidation(req,paste){
   const{maxViews,viewsCount,expiryDate}=paste
    let timeToCompare=new Date()
    const headersTime=Number(req?.headers?.["x-test-now-ms"])
    const isTestMode=process.env.TEST_MODE==="1"
        console.log({headersTime,isTestMode})

    if(isTestMode&&!Number.isNaN(headersTime)){
        timeToCompare=(headersTime)
                console.log("in",{headersTime})

    }
    if(expiryDate&&expiryDate<timeToCompare){
        return {isValid:false,message:"Paste Is Expired"}
    }
    console.log({timeToCompare})
    if(maxViews&&maxViews <= viewsCount){
        return {isValid:false,message:"The View Limit is Exceeded"}
    }

    return {isValid:true,message:"Paste is valid"}
}