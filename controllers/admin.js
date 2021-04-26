const Post = require('../models/Post');
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cloudinary = require('../utils/cloudinary');

// create post
exports.postPost =async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    let post = new Post({
      title: req.body.title,
      content:req.body.content,
      image_url: result.secure_url,
      cloudinary_id: result.public_id,
    });
    await post.save();
    res.json(post);
  } catch (err) {
    res.json({message:err.message})
  }
}
// post update
exports.patchPost = async (req, res) => {
  try {
    const newPost = await Post.updateOne(
      {_id: req.params.id},
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
        },
      }
    );
    res.json(newPost);
  } catch (err) {
    res.json({message: err.message});
  }
};
// post delete
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.deleteOne({_id: req.params.id});
    res.sendStatus(202);
  } catch (err) {
    res.json({message: err.message});
  }
};
// login
exports.login = async (req, res) => {
  try {
    const admin = await Admin.findOne({email: req.body.email});
    if (admin == null) throw new Error('wrong email id');

    const match = await bcrypt.compare(req.body.password, admin.password);
    if (match) {
      const token = await jwt.sign(
        {name: admin.name, email: admin.email},
        process.env.SECRET_KEY
      );
      res.json({token});
    } else throw new Error('wrong password');
  } catch (err) {
    res.sendStatus(404);
  }
};
// auth
exports.authenticate = (req, res, next) => {
  console.log('authenticating');
  // check if the token is valid or not
  const authHeader = req.headers['authorization'];
  if (authHeader == null) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(404);
    req.user = user;
    console.log('here');
    next();
  });
};
