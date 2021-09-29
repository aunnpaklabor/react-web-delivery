import "./Cart.css"
import Annoucement from '../../components/Annoucement/Annoucement'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { Add, Remove } from "@material-ui/icons"

export default function Cart() {
    return (
        <div className="cart-container">
            <Annoucement />
            <Navbar />
            <div className="cartWrapper">
                <h1 className="cartTitle">Your Cart</h1>
                <div className="cartTop">
                    <button className="cartTopButton" 
                        style={{backgroundColor:"transparent"
                        }}>
                            Continue Shopping
                    </button>
                    <div className="cartTopText">Shopping Bag(2)</div>
                    <button className="cartTopButton" 
                        style={{backgroundColor:"black", 
                        color:"white", 
                        border:"none" 
                        }}>
                            Checkout Now
                    </button>   
                </div>
                
                <div className="cartButtom">
                    <div className="cartInfo">
                        <div className="cartProduct">
                            <div className="cartProductDetail">
                                <img className="cartProductImg" 
                                src="images/kurume-ramen.jpg" 
                                alt="" />
                                <div className="cartDetailContainer">
                                    <span><b>Product: </b>Kurume Ramen</span>
                                    <span><b>ID: </b>40127402</span>
                                </div>
                            </div>
                            <div className="cartProductContainer">
                                <div className="cartProductAmount">
                                    <Add />
                                    1
                                    <Remove />
                                </div>
                                <div className="cartProductPrice">15$</div>
                            </div>
                        </div>
                        <hr />
                        <div className="cartProduct">
                            <div className="cartProductDetail">
                                <img className="cartProductImg" 
                                src="images/kagoshima-ramen.jpg" 
                                alt="" />
                                <div className="cartDetailContainer">
                                    <span className="productName"><b>Product: </b>Kagoshima Ramen</span>
                                    <span className="productID"><b>ID: </b>401267832</span>
                                </div>
                            </div>
                            <div className="cartProductContainer">
                                <div className="cartProductAmount">
                                    <Add />
                                    2
                                    <Remove />
                                </div>
                                <div className="cartProductPrice">30$</div>
                            </div>
                        </div>
                    </div>
                    <div className="cartSummary">
                        <h1 className="summaryTitle">Order Summary</h1>
                        <div className="summaryItem">
                            <span className="summaryText">Subtotal: </span>
                            <span className="summaryPrice">45$</span>
                        </div>
                        <div className="summaryItem">
                            <span className="summaryText">Discount Coupon: </span>
                            <span className="summaryPrice">-10$</span>
                        </div>
                        <div className="summaryItem">
                            <span className="summaryText">Estimated Shipping: </span>
                            <span className="summaryPrice">12$</span>
                        </div>
                        <div className="summaryItem" style={{fontWeight:"700", fontSize:"25px"}}>
                            <span className="summaryText">Total: </span>
                            <span className="summaryPrice">47$</span>
                        </div>
                    <button className="summaryButton">CHECKOUT NOW!</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
