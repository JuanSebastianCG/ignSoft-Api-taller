const express = require('express');
const { mongoose } = require('mongoose');
const my_app = express();
const port = 4000;
const routerApi = require('./routes')

require('dotenv').config();
routerApi(my_app);

my_app.listen(port, () => console.log('Port active'));

/*EndPoint: http://localhost:4000 */
my_app.get('/',(req, res) => {
res.send('Api marvel V1');
});

 mongoose
 .connect("mongodb+srv://admin:admin@clustercorte2.jo0ok.mongodb.net/practica_Corte2?retryWrites=true&w=majority")
 .then(() => console.log('Success conection'))
 .catch((error) => {
    console.error(error);
  });


