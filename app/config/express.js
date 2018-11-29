const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');

const env = process.env.NODE_ENV || 'development';

module.exports = function (app) {

    if (env === 'development' || env === 'local') {
        app.use(morgan('dev'));
    }

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());


    app.use(cors());
    app.use(compression());
    app.use(helmet())

}