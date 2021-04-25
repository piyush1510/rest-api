const Post = require('../models/Post');
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.postPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
    });
    const newPost = await post.save();
    res.json(newPost);
  } catch (err) {
    res.json({message: err.message});
  }
};
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
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.deleteOne({_id: req.params.id});
    res.sendStatus(202);
  } catch (err) {
    res.json({message: err.message});
  }
};
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
