import { Op } from 'sequelize';
import user from "../models/user.js";

class UserController {
    static async createUser(nombre, email, edad = undefined) {
        try {
            await user.create({
                nombre,
                email,
                edad
            });
        } catch (error) {
            throw error;
        }
    }

    static async getUserById(id) {
        try {
            const userSearchedId = await user.findByPk(id);
            return userSearchedId ? userSearchedId.toJSON() : null;
        }
        catch (error) {
            throw error;
        }
    }

    static async getUserByName(nombre) {
        try {
            const userSearched = await user.findOne({ 
                where: { 
                    nombre: {
                        [Op.like]: `%${nombre}%` 
                    } 
                } 
            });
            return userSearched ? userSearched.toJSON() : null;
        } catch (error) {
            throw error;
        }
    }

    static async updateUserById(id, {nombre, email, edad}) {
        try {
            const userUpdated = await user.findByPk(id);
            if (!userUpdated) {
                return null;
            }

            if (nombre) userUpdated.nombre = nombre;
            if (email) userUpdated.email = email;
            if (edad !== undefined) userUpdated.edad = edad;

            await userUpdated.save();
            return userUpdated.toJSON();
        } catch (error) {
            throw error;
        }
    }

    static async deleteUserById(id) {
        try {
            const userDeleted = await user.findByPk(id);
            
            if (!userDeleted) return null;
            await userDeleted.destroy();

            return userDeleted.toJSON();
        } catch (error) {
            throw error;
        }
    }

    static async getAllUsers() {
        try {
            const users = await user.findAll();
            return users.map(user => user.toJSON());
        } catch (error) {
            throw error;
        }
    }
}

export default UserController;