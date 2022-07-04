import mongoose from 'mongoose';

const memoriesSchema = mongoose.Schema({
    title:String,
    message:String,
    name: String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likes:{
        type:[String],default:[]
    },
    comments:{
        type:[String],default:[]
    },
    createdAt:{
        type:Date,
        default: new Date(),
    },

})

var PostMessage = mongoose.model('PostMessage',memoriesSchema);
export default PostMessage;