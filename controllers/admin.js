const Post = require('../models/Post');
exports.postPost =async (req,res)=>{
    try {
        const post=new Post({
            title:req.body.title,
            content:req.body.content
        });
        const newPost = await post.save();
        res.json(newPost)
    } catch (err) {
        res.json({message:err.message})
    }
}
exports.patchPost =async (req,res)=>{
    try {
        const newPost = await Post.updateOne({_id:req.params.id},{$set:{
            title:req.body.title,
            content:req.body.content
        }})
        res.json(newPost)
    } catch (err) {
        res.json({message:err.message})
    }
}

exports.deletePost =async (req,res)=>{
    try {
        const post=await Post.deleteOne({_id:req.params.id});
        res.sendStatus(202)
    } catch (err) {
        res.json({message:err.message})
    }
}