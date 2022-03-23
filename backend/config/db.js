import mongoose from "mongoose"

const connectDB = async () => {
    // promisestatement
    /* const conn = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }).then({
        console.log(`MongoDb connected: ${conn.connection.host}`) 
      }) */
try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
      console.log(`MongoDb connected: ${conn.connection.host}`)
} catch(error){
    console.log(`Error:${error.message}`)
    process.exit(1)
}
   
    }

    export default connectDB