Koziamedia

ReactJS + TypeScript ile Frameworklerin Entegrasyonu

Proje Hakkında

Bu proje, hafif ve kullanışlı bir çerçeve sunmak için birden çok framework ve kütüphaneyi entegre eden bir ReactJS uygulamasıdır. Öğrenme, dökümantasyon ve geliştirme sürecini kolaylaştırmak amacıyla tasarlanmıştır.
Projede Çekilen Dosyalar Base64 Formatında Formatlanır ve Images API'de listelenir (Kötü Görüntüyü Product Nesnelerinden Korumak İçin).
Kullanılan Teknolojiler ve Araçlar : TypeScript, ReactJs, React Toolkit, React Query, Route, Formik, Bootstrap, MaterialUI, Sanal API

Kurulum
Bu projeyi kendi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.
Gereksinimler
Node.js (v14+)
npm veya yarn

1. Depoyu Klonlayın

git clone <proje-repo-linki>
cd proje-adi

2. Bağımlılıkları Yükleyin

npm install
# veya
yarn install

3. JSON Server'ı Kurun
json-server'ı kurarak sanal API'yı ayağa kaldırın:
npm install -g json-server

5. Sanal API'yi Başlatın
db.json dosyasınızın bulunduğu dizinde şu komutu çalıştırın:
json-server --watch db.json --port 3001

5. Uygulamayı Çalıştırın
Vite kullanarak uygulamayı başlatın:

npm run dev
# veya
yarn dev

6. Uygulamaya Erişim

Tarayıcınızda şu adresi ziyaret edin:

http://localhost:5173

Kullanım

Material UI ve Bootstrap bileşenlerini kullanarak kolayca özelleştirin.

Redux Toolkit ile durumu kolayca yönetin.

React Query sayesinde veri senkronizasyonunu optimize edin.

JSON Server'ı kullanarak API isteklerinizi test edin.

Proje Yapısı

src/
|-- components/        # Bileşenler
|-- pages/             # Sayfa yapıları
|-- redux/             # Redux Toolkit ayarları
|-- services/routes-route            # React Router tanımları
|-- services/          # API çağrıları
|-- styles/            # Stil dosyaları
|-- App.tsx            # Ana uygulama bileşeni
|-- main.tsx           # Uygulama başlatıcı dosya


Katkılar : 
Projeye katkıda bulunmak isterseniz:
Depoyu forklayın.

Yeni bir dal oluşturun: git checkout -b yeni-ozellik,
Değişikliklerinizi yapın ve commit atın: git commit -m 'Yeni özellik eklemesi',
Dalı ana depoya gönderin: git push origin yeni-ozellik,
Bir Pull Request oluşturun.

Lisans : Bu proje MIT Lisansı altında sunulmaktadır.
