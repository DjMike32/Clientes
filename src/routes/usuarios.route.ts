import express, { Request, Response } from 'express';
import { Router } from "express";
import { obtenerUsuario, crearUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario} from '../controllers/usuarios.controller';


export const rutasUsuarios: Router = express.Router();

//Guardar un usuario
rutasUsuarios.post('/', crearUsuario);

//Obtener un usuario
rutasUsuarios.get('/:id', obtenerUsuario);

//Obtener todos los usuarios
rutasUsuarios.get('/', obtenerUsuarios);

//Actualizar un usuario
rutasUsuarios.put('/:id', actualizarUsuario);

//Eliminar un usuario
rutasUsuarios.delete('/:id', eliminarUsuario);

