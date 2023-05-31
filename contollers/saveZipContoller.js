const compressing = require('compressing');
const fs = require('fs');

const fileUrl = "http://localhost:5050/save/zipdowload/"

module.exports.saveZip=async(req,res)=>{
    try {
        const stream = new compressing.zip.Stream() //klasörü zip olarak oluşturma
       // console.log("params----",req.params.name)

        stream.addEntry('./folders/extract/'+req.body.name) //filename gönderilemeli extract içindeki oluşturulan dosya dizinine ulaşmak body ile gönderilecek. body den gönderilmeli yoksa içi boş oluyor.
        stream.pipe(fs.createWriteStream('./folders/'+req.params.name)) //kaydedilecek dosya adı parametre olarak istenilen şekilde gönderilebilir. name in sonuna +'.zip' yazılırsa zip olaraak kaydeder fakat dosya adlarında zip olduğu için gerek yok
        //res.json({ message: "geldi" })

        const fileInfo = [];
        fileInfo.push({
            name: req.params.name, //dosya adını parametreden gelen ad yapar o ad ile kaydeder.
            url: fileUrl + req.params.name //indirmek için url oluştutuldu.
        })
        res.send(fileInfo)
       // console.log(fileInfo)
    } catch (error) {
        console.log(error)
    }
}

module.exports.zipDowload=async(req,res)=>{ //dosya yolu almak için req.body.name yapılmazsa boş klasör olacağı için indirme işlemi çalışmaz
    const fileName = req.params.name
    const directoryPath = __basedir + '/folders/'

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.send({ message: " Dosya yüklenemedi: " + err })
        }
    })

    
}