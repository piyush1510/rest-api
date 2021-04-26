const router = require('express').Router();
const adminController = require('../controllers/admin')

router
    .post('/login',adminController.login) //login route
    .use(adminController.authenticate) // acts as a mask for all other admin routes
    .post('/create/',adminController.postPost)
    .patch('/update/:id',adminController.patchPost)
    .delete('/delete/:id',adminController.deletePost)

module.exports = router;
