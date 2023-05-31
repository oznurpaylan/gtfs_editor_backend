const util = require("util");
const multer  = require('multer')
const date=new Date()

//zip yükleme işlemi 

const storage=multer.diskStorage({  //zip dosyayısnın depolanacağı alan 
    destination: (req,file,callback)=>{ //dosyanın kaydedileceği yol için destination 
        callback(null,'./folders/uploads') 
    },
    filename: (req,file,callback)=>{
        const hour=date.getHours()
        const minute=date.getMinutes()
        const second=date.getSeconds()
        const time=hour+"."+minute+"."+second
        //console.log(time)

        callback(null,time+file.originalname) //saat + Kullanıcının kayıtlı adı ile kaydet 
       // console.log(time+file.originalname)
    }
})

const fileUpload=multer({
    storage:storage
}).single('file') // aynı ada sahip tek dosya oluşur

const fileUploadMiddleware=util.promisify(fileUpload)
module.exports={fileUploadMiddleware}