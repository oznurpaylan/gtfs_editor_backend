
# GTFS Editor

GTFS verilerinin buldunduğu zorunlu ve opsiyonel 23 farklı dosya için gerçekleştirildi. 

### Dosya işlemleri:
- .zip dosyaysı yükleme işlemi gerçekleştirildi.
- .zip dosya ayıklama işlemi gerçekleştirildi.
- Yüklenen dosyayı sile ve dosyaları listeleyerek indirme işlemi gerçekleştirildi.
- Gtfs .txt dosyaları için veri tabanı kayıt işlemleri gerçekleştirildi. 
- Kayıtlı veriler üzerinde CRUD işlemleri gerçekleştirilerek tekrar veritabanına ve dosya üzerine yazma işlemi gerçekleştirildi. 
- Yüklenen dosyaya özel oluşturulan session_id ye göre dosyaları tekrar .zip haline getirme ve indirme işlemi gerçekleştirildi.


## Kullanılan araçlar

Veritabanı 
    
    MongoDB

API testleri 

    Postman
## API Kullanımı

#### Başlangıç

    npm i
    npm start

#### model kaydet

```http
  Post /add/agency/${name}
```


## Ortam Değişkenleri

Bu projeyi çalıştırmak için aşağıdaki ortam değişkenlerini .env dosyanıza eklemeniz gerekecek

`PORT`

`DB_URI`

  
