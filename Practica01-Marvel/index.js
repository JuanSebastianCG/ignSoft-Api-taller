
const express = require('express');
const  mongoose  = require('mongoose');
const routerApi = require('./src/routes');
const app = express();


require('dotenv').config();
const port = process.env.PORT;



app.listen(port, () => console.log('active port', port));


mongoose
.connect(process.env.MONGODB_STRING_CONNETION)
.then(() => console.log('Success conection'))
.catch((error) => console.error(error));

 app.use(express.json());
 routerApi(app);








