import mongoose from "mongoose"

const db_connection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`MongoDB Connnected: ${connect.connection.host}`.bgGreen)
  } catch (error) {
    console.log(`Error: ${error.messagt}`.bgRed)
    process.exit(1)
  }
}

export default db_connection