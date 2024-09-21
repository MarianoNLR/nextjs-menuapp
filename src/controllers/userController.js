import User from '../models/userModel.js'
import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
//import 'dotenv/config'

const JWT_SECRET = "jwt_secret"

export async function getAll (req, res) {
    try {
        const users = await User.findAll()

        return res.status(200).json({ result: users })
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error.' })
    }
}

export async function getById (req, res) {
    const { userId } = req.params

    try {
        const user = await User.findByPk(userId)
        
        if (!user) return res.status(404).json({error: 'User not found.'})
        
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error.' })
    }
}

export async function register (req, res) {
    const {username, email ,password, confirmPassword} = req.body
    console.log(username)
    try {

        if (password !== confirmPassword)
            return res.status(400).json({error: 'Passwords must match.'})

        const hashedPassword = await hash(password, 10)

        const result = await User.create({username, email, password: hashedPassword})

        return res.status(201).json({ result })
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error.' })
    }
}

export async function login (req, res) {
    const { username, password } = req.body

    if (!username || !password) return res.status(400).json({error: 'Username and password needed.'})
    
        try {
            const userData = await User.findOne({
                where: {
                    username: username
                }
            })
            console.log(userData)
            if (!userData) return res.status(404).json({error: 'Username does not exist.'})
            
            const verifyPassword = await compare(password, userData.password)

            if (!verifyPassword) return res.status(400).json({error: 'Incorrect Password'})

            const token = sign({userId: userData._id, username: userData.username, password: userData.password}, JWT_SECRET)
            
            return res.status(200).json({msg: 'Loged in successfully.', userData, token})
        } catch (error) {
            return res.status(500).json({error: 'Internal Server Error.'})
        }
}

export async function deleteUser (req, res) {
    const { userId } = req

    try {
        const result = await User.destroy({
            where: {
                id: userId
            }
        })

        return res.status(200).json({message: 'User has been deleted successfully.', result})
    } catch (error) {
        return res.status(500).json({error: 'Internal error server.'})
    }
}