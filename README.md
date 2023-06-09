
# GTFS Editor

GTFS verilerinin buldunduğu zorunlu ve opsiyonel 23 farklı dosya için gerçekleştirildi. 

### Dosya işlemleri:
- .zip dosyaysı yükleme işlemi gerçekleştirildi.
- .zip dosya ayıklama işlemi gerçekleştirildi.
- Yüklenen dosyayı sile ve dosyaları listeleyerek indirme işlemi gerçekleştirildi.
- Gtfs .txt dosyaları için veri tabanı kayıt işlemleri gerçekleştirildi. 
- Kayıtlı veriler üzerinde CRUD işlemleri gerçekleştirilerek tekrar veritabanına ve dosya üzerine yazma işlemi gerçekleştirildi. 
- Yüklenen dosyaya özel oluşturulan session_id ye göre dosyaları tekrar .zip haline getirme ve indirme işlemi gerçekleştirildi.

![image]([https://github.com/oznurpaylan/gtfs_editor_backend/assets/79011604/f38d64f6-82d1-406d-a1fb-ff2d7b7fb1d6](https://trilliumtransit.com/wp-content/uploads/2016/07/GTFS_data_model_diagram.png))

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

  
