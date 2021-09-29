import { Add, Remove } from "@material-ui/icons"
import Announcement from "../../components/Annoucement/Annoucement"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Newsletter from "../../components/Newsletter/Newsletter"
import "./SingleProduct.css"

export default function SingleProduct() {
    return (
        <div className="single-container">
            <Announcement />
            <Navbar />
            <div className="singleWrapper">
                <div className="singleImgContainer">
                    <img className="singleImg"
                    src="images/miso-ramen.jpg" 
                    alt="" />
                </div>
                <div className="singleInfo">
                    <h1 className="singleTitle">Miso Ramen</h1>
                    <p className="singleDesc">Fragrant soybean paste is sauteed together with ginger and garlic and mixed together with pork broth for a hearty bowl of ramen that hits the spot on even the coldest winter days. 
                    Toppings include roasted chashu  pork, bamboo shoots, and bean sprouts.
                    </p>
                    <span className="singlePrice">15$</span>
                    <div className="filterContainer">
                        <span className="filterTitle">Delivery Date:</span>
                        <select name="date" id="date" >
                            <option >1st October</option>
                            <option >8st October</option>
                            <option >15st October</option>
                            <option >22st October</option>
                        </select>   
                    </div>
                    <div className="addContainer">
                        <div className="amountContainer">
                            <Remove />
                            <span className="amountBox">2</span>
                            <Add />
                        </div>
                        <button className="cartButton">Add to Cart</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}
