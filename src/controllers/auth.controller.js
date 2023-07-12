import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
  const { email, password, username } = (req.body)

  try {

    const passwordHash = await bcrypt.hash(password, 10)
    const newUser = new User({
      email,
      password: passwordHash,
      username
    })
    const userSaved = await newUser.save()
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt
    })
  } catch (error) {
    console.log(error)
  }
}
export const login = (req, res) => res.send('login')