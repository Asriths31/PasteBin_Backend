import { Schema,mongoose } from "mongoose"

const schema=new Schema({
   content: {
        type:String,
        required:true
    },
    expiryDate:{
        type:Date,
    },
    maxViews:{
        type:Number,
    },
    viewsCount:{
        type:Number,
        default:0
    }
},{
    timestamps:true
}

)

export const PasteDocs=mongoose.model("PasteDocs",schema);