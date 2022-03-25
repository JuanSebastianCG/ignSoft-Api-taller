
const express = require('express')
const departamentsRouter = require('./departaments.router')


function routerApi(my_app){

  const router = express.Router();
  /* Endpoint statico: http://localhost:4000/api/vi*/
  my_app.use('/api/v1' , router)
  /* Endpoint statico: http://localhost:4000/api/vi/departaments*/
  router.use('/departaments', departamentsRouter)

}
module.exports = routerApi

