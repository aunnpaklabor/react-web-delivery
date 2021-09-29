import "./slider.css"

export default function Slider() {
    return (
        <div className="slider-container">
            <div className="wrapper">
                <div className="slide">
                    <div className="imgContainer">
                        <img 
                        src="images/ramen.png" 
                        alt="" />
                    </div>
                    <div className="info">
                        <h1 className="titleInfo">Ramen Vibe.</h1>
                        <p className="descInfo">great quality japanese ramen, now delivery nationally</p>
                        <button className="buttonInfo">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
