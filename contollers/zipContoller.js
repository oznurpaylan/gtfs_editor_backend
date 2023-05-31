const fs = require('fs');
const fileUrl = "http://localhost:5050/filedownload/"
const { fileUploadMiddleware } = require('../middlewares/uploadMiddleware.js')

module.exports.uploadPost = async (req, res) => {
    try {
        await fileUploadMiddleware(req, res); //dosya yükleme işlemi
       // console.log(req.file)
        if (req.file == undefined) {
            return res.send({ message: "Dosya bulunamadı..." });
        }
        res.send({message: req.file.filename}); //req file den gelen orjinal name al postmanden gönderirken name kısmı "file" olmalı

    } catch (err) {
        console.log(err);
        res.send({ message: `Dosya yükleme hatası:  ${err}` });
    }
}

const decompress = require("decompress"); //dosyaları ilgili dizine çıkarmak
module.exports.fileDecompressPost = async (req, res) => {

    const fileName = req.params.name
    const directoryPath = __basedir + '/folders/uploads/'

    decompress(directoryPath + fileName, "folders/extract/" + fileName) //extract altında filename adında dosya oluşturarak oraya kaydeder.
        .then((files) => {
            //console.log(typeof(files));
            res.send({ message: 'zip ayıklama işlemi başarılı', files })
        })
        .catch((error) => {
            res.send({ message: ' Dosya ayıklama hatası ' + error })
        });
}


module.exports.fileListGet = async (req, res) => { //dosya listeleme
    const directoryPath = __basedir + '/folders/uploads/'
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.send({ message: " Dosya bulunamadı " })
        }

        const fileInfo = []
        files.forEach((file) => {
            fileInfo.push({
                name: file,
                url: fileUrl + file //indirmek için fileurl ile dowload get aynlı  url olamlı indirme linki oluşturur
            })
        })
        // console.log(typeof(fileInfo))
        res.send(fileInfo)

    })
}

module.exports.fileDowloadGet = async (req, res) => { //sıralandıktan sonra fileurl üzerinden indirme yapılır
    const fileName = req.params.name
    const directoryPath = __basedir + '/folders/uploads/'

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.send({ message: " Dosya yüklenemedi: " + err })
        }
    })
}

module.exports.fileDelete = async (req, res) => {
    const fileName = req.params.name
    const directoryPath = __basedir + '/folders/uploads/' //ilgili dizindeki dosyayı silmek için 

    fs.unlink(directoryPath + fileName, (err) => {
        if (err) {
            res.send({ message: " Dosya silme hatası ", err })
        }
        res.send({ message: " Dosya silindi" })
    })
}

module.exports.fileReadPost = async (req, res) => { //dosya içeriklerini görmek için dosya okuma
    const directoryPath = __basedir + '/folders/extract/'
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.send({ message: " Dosya içeriği bulunamadı " })
        }

        files.forEach(file => {
            fs.readFile(directoryPath + file, function (err, data) {
                if (err) {
                    res.send({ message: err })
                }
                else {
                    console.log(file)
                    console.log("----");
                    console.log(data.toString());
                    console.log("-----------------------------");
                }
            });
        })
        res.send({ message: "listeleniyor" })
    })
}