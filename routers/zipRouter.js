const express=require('express')
const { uploadPost, fileListGet, fileDowloadGet, fileDelete, fileDecompressPost, fileReadPost } = require('../contollers/zipContoller')

//zip dosyayı ile ilgili işlemler.
const zipRouter=express.Router()

zipRouter.route('/upload').post(uploadPost) //dosya yükleme
zipRouter.route('/filedecompress/:name').post(fileDecompressPost) //dosyayı ilgili dizine çıkarma
//zipRouter.route('/fileread').post(fileReadPost) //dosya içeriği okuma
zipRouter.route('/filelist').get(fileListGet) //dosyaları sıralama
zipRouter.route('/filedownload/:name').get(fileDowloadGet) //sıralanan dosylarda isim üzerinden indirme 
zipRouter.route('/filedelete/:name').delete(fileDelete) //dosya silme 

module.exports={zipRouter}