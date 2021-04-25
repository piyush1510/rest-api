const router = require('express').Router();
const publicController = require('../controllers/public')


router
    .get('/',publicController.getAllPosts)      // get all posts
    .get('/getone/:id',publicController.getOnePost) //get one post

module.exports = router;
