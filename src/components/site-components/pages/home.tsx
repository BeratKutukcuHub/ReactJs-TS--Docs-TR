import { GetCategoryContext } from "../../services/context/categorycontext";
import { CategoryDescription } from "./categoryforpage"
import { useContext } from "react"

interface HomePageTypes {
    category : (state : CategoryDescription)=>void
}
function HomePage ({category}:HomePageTypes){
    const {stateCategoryDescription, CategoryDescription:categories} = useContext(GetCategoryContext)
    const handleCategories = (state : CategoryDescription):void => {
        stateCategoryDescription(state);
        category(categories);
    }
    return (
        <div>
                <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2"><p>Kozmetik Ürünlerinleriyle Kendinizi Ödüllendirin!</p></h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a type="button" className="btn btn-primary btn-lg px-4 me-sm-3" href="/market">Alışverişe Başla</a>
                                    <a className="btn btn-outline-light btn-lg px-4" href="#!">Daha Fazlası</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src="
                         images/e-ticarette-en-cok-satilan-urunler-kisisel-bakim-ve-makyaj-urunleri-1.png" alt="..." /></div>
                    </div>
                </div>
            </header>
            <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-12">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <div className="col mb-8 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                                    <h2 className="h5">Gelecek Ürünler</h2>
                                    <p className="mb-0">Gelecek Ürünlere Bakın, Stokta Kalmadan Yetişin!</p>
                                </div>
                                <div className="col mb-8 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                                    <h2 className="h5">Bizimle İş Ortaklığına Var Mısın?</h2>
                                    <p className="mb-0">Sektörümüzde Yenilikçi, Geliştirici ve Başarılar İsteyenlerle İlerlemek İsteriz, Sen de Var Mısın?</p>
                                </div>
                                <div className="col mb-8 mb-md-0 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                                    <h2 className="h5">İndirimdeki Ürünlerimiz</h2>
                                    <p className="mb-0">Bu Listemizi Kaçırmak İstemeyeceksiniz!</p>
                                </div>
                                <div className="col h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                                    <h2 className="h5">Popüler Ürünlerimiz</h2>
                                    <p className="mb-0">En Sık Tercih Edilen Ürünlerimizle Kendinize İyi Gelmek ister Misiniz?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-4 bg-light">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-10 col-xl-7">
                            <div className="text-center">
                                <div className="fs-4 mb-4 fst-italic">"Kadınlar Olarak Hepimiz Çok Güçlüyüz. Bu Çirkin Dünyadaki Tek Güzel Canlılarız! Sadece Güzel Görünmekle Kalmıyoruz Dünyayı da Güzelleştiriyoruz!"</div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                    <div className="fw-bold">
                                        Anonim
                                        <span className="fw-bold text-primary mx-1">/</span>
                                        CEO, Anonim
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">Öne Çıkan Kategorilerimiz</h2>
                                <p className="lead fw-normal text-muted mb-5">Burada En Sık Tercih Edilen Kategorileri Listeliyoruz</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="images/kadin-vucut-bakim-urunleri.webp" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Güncel</div>
                                    <a className="text-decoration-none link-dark stretched-link" onClick={()=> handleCategories(CategoryDescription.Parfumler)}><h5 className="card-title mb-3">Parfümler</h5></a>
                                    <p className="card-text mb-0">Sizi Güzel Hissettirecek ve Doğayı Kendinize Çekin!</p>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="images/portrait-beautiful-woman-applying-face-cream_222877-2104.avif" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Güncel</div>
                                    <a className="text-decoration-none link-dark stretched-link" onClick={()=> handleCategories(CategoryDescription.VucutYagKremleri)}><h5 className="card-title mb-3">Vücut Yağ ve Kremleri</h5></a>
                                    <p className="card-text mb-0">Kendinize İyilik Edin, Sağlıklı Ürünlerimizle Detoks Yapın! </p>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="images/Vegan-sac-bakim-urunleri.jpg.webp" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Güncel</div>
                                    <a className="text-decoration-none link-dark stretched-link" onClick={()=> handleCategories(CategoryDescription.SacBakimUrunleri)}><h5 className="card-title mb-3">Saç Bakım Ürünleri</h5></a>
                                    <p className="card-text mb-0">Saçlarımız Gün İçerisinde Çok Yoruluyor ve Biz Onları Fark Etmiyoruz Bile.. Onlara Gerektiği İlgiyi Vermeliyiz!</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
                        <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                            <div className="mb-4 mb-xl-0">
                                <div className="fs-3 fw-bold text-white">Öneriler ve İsteklerinizle Bize Ulaşın.</div>
                                <div className="text-white-50">Gönderdiğiniz Mail Adresine Dönüş Sağlanacaktır.</div>
                            </div>
                            <div className="ms-xl-4">
                                <div className="input-group mb-2">
                                    <input className="form-control" type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter" />
                                    <button className="btn btn-outline-light" id="button-newsletter" type="button">Gönder</button>
                                </div>
                                <div className="small text-white-50">Sizler için Elimizden Ne Geliyorsa!</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
            

        </div>
    )
}
export default HomePage