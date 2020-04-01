const routes = require('express').Router();
const user = require("../components/user.js")

routes.get('/user', (req, res) => {
  respuesta = {
   error: false,
   codigo: 200,
   mensaje: ''
  };
  if(user.nombre === '' || user.apellido === '') {
   respuesta = {
    error: true,
    codigo: 501,
    mensaje: 'El usuario no ha sido creado'
   };
  } else {
   respuesta = {
    error: false,
    codigo: 200,
    mensaje: 'respuesta del usuario',
    respuesta: user
   };
  }
  res.send(respuesta);
 })
 .post('user', (req, res) => {
  if(!req.body.nombre || !req.body.apellido) {
   respuesta = {
    error: true,
    codigo: 502,
    mensaje: 'El campo nombre y apellido son requeridos'
   };
  } else {
   if(user.nombre !== '' || user.apellido !== '') {
    respuesta = {
     error: true,
     codigo: 503,
     mensaje: 'El usuario ya fue creado previamente'
    };
   } else {
    usuario = {
     nombre: req.body.nombre,
     apellido: req.body.apellido
    };
    respuesta = {
     error: false,
     codigo: 200,
     mensaje: 'Usuario creado',
     respuesta: user
    };
   }
  }
  
  res.send(respuesta);
 })
 .put('/user', (req, res) => {
  if(!req.body.nombre || !req.body.apellido) {
   respuesta = {
    error: true,
    codigo: 502,
    mensaje: 'El campo nombre y apellido son requeridos'
   };
  } else {
   if(user.nombre === '' || user.apellido === '') {
    respuesta = {
     error: true,
     codigo: 501,
     mensaje: 'El usuario no ha sido creado'
    };
   } else {
    user = {
     nombre: req.body.nombre,
     apellido: req.body.apellido
    };
    respuesta = {
     error: false,
     codigo: 200,
     mensaje: 'Usuario actualizado',
     respuesta: user
    };
   }
  }
  
  res.send(respuesta);
 })
 .delete('/user', (req, res) => {
  if(user.nombre === '' || user.apellido === '') {
   respuesta = {
    error: true,
    codigo: 501,
    mensaje: 'El usuario no ha sido creado'
   };
  } else {
   respuesta = {
    error: false,
    codigo: 200,
    mensaje: 'Usuario eliminado'
   };
   user = { 
    nombre: '', 
    apellido: '' 
   };
  }
  res.send(respuesta);
 });

module.exports = routes;
