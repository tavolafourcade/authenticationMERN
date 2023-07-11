import mongoose from "mongoose"

// Creando la estructura de la colección
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  }
}, {
  timestamps: true
})

// Creando el modelo User
export default mongoose.model('User', userSchema)
