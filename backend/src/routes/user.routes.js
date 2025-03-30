import express from 'express';
import UserController from '../controller/UserController.js';
import { userSchema, userUpdateSchema, idSchema } from '../middlewares/userValidation.js';

const router = express.Router();

// Obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
    try {
        const users = await UserController.getAllUsers();

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

// Obtener un usuario por ID
router.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    
    const result = idSchema.safeParse({ id });

    if (!result.success) {
        return res.status(400).json({ error: result.error.errors[0].message });
    }
    
    try {
        const user = await UserController.getUserById(id);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

// Obtener un usuario por nombre
router.get('/usuariosBusq/:nombre', async (req, res) => {
    const { nombre } = req.params;
    
    try {
        const user = await UserController.getUserByName(nombre);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

// Crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
    const { nombre, email, edad } = req.body;
    
    const result = userSchema.safeParse({ nombre, email, edad });

    if (!result.success) {
        return res.status(400).json({ error: result.error.errors[0].message });
    }

    try {
        await UserController.createUser(nombre, email, edad);
        res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

// Actualizar datos de un usuario
router.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, email, edad } = req.body;

    const idResult = idSchema.safeParse({ id });
    const userResult = userUpdateSchema.safeParse({ nombre, email, edad });

    if (!idResult.success) {
        return res.status(400).json({ error: idResult.error.errors[0].message });
    }

    if (!userResult.success) {
        return res.status(400).json({ error: userResult.error.errors[0].message });
    }

    try {
        const updatedUser = await UserController.updateUserById(id, { nombre, email, edad });

        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json({message: 'Usuario actualizado'});
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

// Eliminar un usuario
router.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    
    const result = idSchema.safeParse({ id });

    if (!result.success) {
        return res.status(400).json({ error: result.error.errors[0].message });
    }

    try {
        const deletedUser = await UserController.deleteUserById(id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario: ', error });
    }
});

export default router;