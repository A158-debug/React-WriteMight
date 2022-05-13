import mongoose from 'mongoose';

const memoriesSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        types: Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default: new Date(),
    },

})

var PostMessage = mongoose.model('PostMessage',memoriesSchema);
export default PostMessage;