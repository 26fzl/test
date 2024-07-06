import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/i1.jpg",
        "/img/gallery/i2.jpg",
        "/img/gallery/i3.jpg",
        "/img/gallery/i4.jpg",
        "/img/gallery/i5.jpg",
        "/img/gallery/i6.jpg",
        "/img/gallery/i7.jpg",
        "/img/gallery/i8.jpg",
        "/img/gallery/i9.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">WELCOME TO MOROCCOKIES</h1>
                <p className="info">Welcome to Moroccookies, your ultimate destination for discovering and sharing the rich and diverse world of Moroccan sweets. At Moroccookies, we celebrate the art of Moroccan pastry making, bringing you authentic recipes passed down through generations. Our goal is to connect enthusiasts of Moroccan cuisine with delightful treats that showcase the unique flavors and ingredients of Morocco.</p>
                <button className="btn">Explore</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}