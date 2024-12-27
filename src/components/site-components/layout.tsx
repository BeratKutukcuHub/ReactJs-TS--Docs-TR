import React, { useContext } from "react";
import { AuthContext, UserInfo } from "../services/context/auth";
export interface ReactNodes {
    children: React.ReactNode;
}

export function IndexLayout({children}:ReactNodes) {
    const {user,setAppUser} = useContext(AuthContext);
    const handleClick = () => {
        setAppUser(UserInfo);
    }
    return (
        <>
        <main className="flex-shrink-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <a style={{"display":"flex" , "fontSize":"22px" ,"border":"2px" , "borderRadius": "10px" }}className="navbar-brand" href="index.html"><p style={{"color":"wheat"}}>Koz</p><p style={{"color":"white"}}>iamedia {user.id!="Empty"? `Hoş Geldin : ${user.userName}`: ""}</p></a> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="/">Anasayfa</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contact">İletişim</a></li>
                            <li className="nav-item"><a className="nav-link" href="/faq">S.S.S</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hikayeni Paylaş!</a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a className="dropdown-item" href="blog-home.html">Blog Yaz</a></li>
                                    <li><a className="dropdown-item" href="blog-post.html">Paylaş</a></li>
                                </ul>
                            </li>
                            { user.id == "Empty"? <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Giriş İşlemleri</a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a className="dropdown-item" href="/login">Giriş Yap</a></li>
                                    <li><a className="dropdown-item" href="/signup">Kayıt Ol</a></li>
                                </ul>
                            </li> : <li className="nav-item">
                                 <a className="nav-link" onClick={handleClick}>Çıkış Yap</a>
                            </li>
                            }
                            
                            <li className="nav-item dropdown">
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                    <li><a className="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
                                    <li><a className="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div style={{height:"100vh"}}>
            {children}
            </div>
            
            
            
        </main>
        </>
    )
}