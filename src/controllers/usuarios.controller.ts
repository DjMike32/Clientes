import { Request, Response } from 'express';

export const obtenerUsuario = (req: Request, res: Response) => {
    res.send('obtener un usuario: ' + req.params.id);
};

export const crearUsuario = (req: Request, res: Response) => {
    res.send('Guardar un usuario');
};

export const obtenerUsuarios = (req: Request, res: Response) => {
    res.send('Obtener todos los usuarios');
};

export const actualizarUsuario = (req: Request, res: Response) => {
    res.send('Actualizar un usuario: ' + req.params.id);
};

export const eliminarUsuario = (req: Request, res: Response) => {
    res.send('Eliminar un usuario: ' + req.params.id);
};