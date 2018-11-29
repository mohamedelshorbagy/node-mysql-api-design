const express = require('express');
const router = express.Router();

/** UserController
 * 
 */
const userController = require('../app/controllers/user');

router.get('/all', userController.getUsers);
router.post('/insert', userController.insertUser);
router.patch('/:id/update', userController.updateUser);
router.delete('/:id/delete', userController.deleteUser);





module.exports = router;