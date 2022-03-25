const express = require('express');
const router = express.Router();
const departamentsJSON = require('../json/departaments.json');

/* Request http api restiful
endpoint : http://localhost:4000/api/v1/departaments
*/
router.get('/', (req,res)=>{

res.json(departamentsJSON)
});

/* dependiendo del codigo del departamento que el usuario ingrese como parametro
en URI , cargar todos los los municipios de ese departamento

endpoint : http://localhost:4000/api/v1/departaments/[municipio]
*/
router.get('/:departamentId', (req, res)=>{
const {departamentId} = req.params;
const departaments_municipales = departamentsJSON.filter(
  (departament)=>departament['c_digo_dane_del_departamento'] === departamentId
  );
  res.json(departaments_municipales);
});

/*1. Mostrar los departamentos cuyo código dane es mayor a 15 y menor a 20
endpoint : http://localhost:4000/api/v1/departaments/taller/1/name
*/
router.get('/taller/1/name', (req, res)=>{


  const departaments_name = departamentsJSON.filter(
    (departament)=>{
      return departament['departamento'].length > '15' && departament['departamento'].length < '20';
    }
    );

    res.json(departaments_name);
  });

/* 2. Como parámetro opcional el usuario ingresa el código del departamento y se cargan sus municipios, validar si el usuario no ingresa el
código traer todo el JSON
endpoint : http://localhost:4000/api/v1/departaments/taller/2/departamentos?departamentId=15
*/
router.get('/taller/2/departamentos', (req, res)=>{
const {departamentId} = req.query;

if (departamentId) {
    const departaments_municipales = departamentsJSON.filter(
      (departament)=>departament['c_digo_dane_del_departamento'] === departamentId
      );
      res.json(departaments_municipales);
    }else{
      res.json(departamentsJSON)
    }
  });

/* 3. El usuario ingresa como parámetro opcional el nombre del municipio que desea consultar de lo contrario por defecto se cargan los
municipios de Caldas
endpoint : http://localhost:4000/api/v1/departaments/taller/3/municipio?municipioId=25035
*/
router.get('/taller/3/municipio', (req, res)=>{
  const {municipioId} = req.query;

  if (municipioId){
      const municipios = departamentsJSON.filter(
        (departament)=>departament['c_digo_dane_del_municipio'] === municipioId
        );
        res.json(municipios);
      }else{
      const municipios_caldas = departamentsJSON.filter(
          (departament)=>departament['c_digo_dane_del_departamento'] === "17"
          );
          res.json(municipios_caldas);

      }
    });







  /*4. Mostrar todos los departamentos cuyo nombre inicia por la letra "C"
endpoint : http://localhost:4000/api/v1/departaments/taller/4/C
*/
  router.get('/taller/4/:letra', (req, res)=>{
    const {letra} = req.params;
    const departaments_name = departamentsJSON.filter(
      (departament)=>departament['departamento'].charAt(0) === "C");
      res.json(departaments_name);
    })





module.exports = router;




