const mongoose = require("mongoose");
const uri = process.env.MONGO_DB_URL
mongoose.set('strictQuery', false)


async function connectionToDb(uri) {    
    try {
      await mongoose.connect(uri);
      console.log("successful connection")
    } catch (error) {
      console.log("=============ERROR==============", error)
    }
}

connectionToDb(uri)