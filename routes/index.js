const usersRoutes = require('./user');


module.exports = function (app) {
    app.use('/api/users', usersRoutes);


}