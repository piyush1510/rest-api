const Post = require('../models/Post');
exports.getAllPosts=async (req,res)=>{
    try {
        const allPosts=await Post.find();
        res.json(allPosts);
    } catch (err) {
        res.json({message:err.message})
    }
}
exports.getOnePost=async (req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        res.json(post)
    } catch (err) {
        res.json({message:err.message})
    }
}