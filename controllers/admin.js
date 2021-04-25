exports.postPost = (req,res)=>{
    res.json({message:"create"})
}
exports.patchPost = (req,res)=>{
    res.json({message:"update one post"})
}

exports.deletePost = (req,res)=>{
    res.json({message:"delete one post"})
}