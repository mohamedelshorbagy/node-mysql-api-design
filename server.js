require('dotenv').config();
const express = require('express');




const app = express();


require('./app/config/express')(app);
require('./routes/index')(app);
require('./app/config/db');

const port = (process.env.PORT || 3000);
listen(port);




function listen(port) {

    app.listen(port, () => {
        console.log(`App Listen in localhost:${port}`);
    })

}



