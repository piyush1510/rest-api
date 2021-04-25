const router = require('express').Router();
const adminController = require('../controllers/admin')

router
    .post('/create/',adminController.postPost)
    .patch('/update/:id',adminController.patchPost)
    .delete('/delete/:id',adminController.deletePost)

module.exports = router;
