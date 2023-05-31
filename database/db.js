require('dotenv').config()
const mongoose=require('mongoose')
const db_env=process.env.DB_URI

async function connect(){
    try {
        await mongoose.connect(db_env,{ useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true,useFindAndModify: false })
        console.log('DB bağlantısı hazır. ')
        
    } catch (error) {
        console.log('DB bağlantı hatası ',{error})
    }
}
module.exports={connect}