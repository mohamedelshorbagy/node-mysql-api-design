

const userService = require('../services/user');

const ctrls = {};

/** @GET
 * 
 * 
 * 
 */

ctrls.getUsers = (req, res, next) => {
    return userService.getUsers()
        .then(result => result[0]) // To Extract the result
        .then((result) => {
            console.log(result);
            return res.status(200).json({
                success: true,
                data: result
            })
        }).catch(err => {
            return res.status(500).json({
                success: false,
                data: err
            })
        });
}


/** @POST
 * 
 * 
 * 
 */

ctrls.insertUser = (req, res, next) => {
    const user = req.body.user; // userObject { name, age }  

    return userService.insertUsers(user)
        .then(result => result[0]) // To Extract the result
        .then(result => {
            console.log(result);
            if (result['affectedRows'] >= 1) {
                return res.json({
                    success: true,
                    data: result,
                    message: 'User Created Successfully'
                })
            } else {
                return res.json({
                    success: false,
                    data: result,
                    message: 'Something went wrong'
                })
            }
        })
        .catch(err => {
            return res.status(500).json({
                success: false,
                data: err,
                message: 'Something went wrong'
            })
        })

}


/** @UPDATE
 * 
 * 
 */


ctrls.updateUser = (req, res, next) => {
    const { id } = req.params;
    const { user } = req.body;
    return userService.updateUser(id, user)
        .then(result => result[0]) // To Extract the result
        .then(result => {
            console.log(result);
            if (result['affectedRows'] >= 1) {
                return res.json({
                    success: true,
                    data: result,
                    message: 'User Updated Successfully!'
                })
            } else {
                return res.json({
                    success: false,
                    data: result,
                    message: 'Something went wrong'
                })
            }

        })
        .catch(err => {
            return res.status(500).json({
                success: false,
                data: err,
                message: 'Something went wrong'
            })
        })



}





/** @DELETE
 * 
 * 
 * 
 * 
 */

ctrls.deleteUser = (req, res, next) => {
    const { id } = req.params;
    return userService.deleteUser(id)
        .then(result => result[0]) // To Extract the result
        .then(result => {
            console.log(result);
            if (result['affectedRows'] >= 1) {
                return res.json({
                    success: true,
                    data: result,
                    message: 'User deleted Successfully!'
                })
            } else {
                return res.json({
                    success: false,
                    data: result,
                    message: 'Something went wrong'
                })
            }

        })
        .catch(err => {
            return res.status(500).json({
                success: false,
                data: err,
                message: 'Something went wrong'
            })
        })


}




module.exports = ctrls;