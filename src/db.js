import mongoose from "mongoose";
import * as dotenv from 'dotenv'

dotenv.config()

// mongoose.connect(process.env.MONGO_URL,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(db => console.log('Db connected'))
//   .catch(error => console.log(error))

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log('DB connected')
  } catch (error) {
    console.log(error)
  }
}