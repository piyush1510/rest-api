const router = require('express').Router();
const adminController = require('../controllers/admin')
const upload = require('../utils/multer');


router
    .post('/login',adminController.login) //login route
    .use(adminController.authenticate) // acts as a mask for all other admin routes
    .post('/create/',upload.single('image'),adminController.postPost)
    .patch('/update/:id',adminController.patchPost)
    .delete('/delete/:id',adminController.deletePost)

module.exports = router;
