import { CallOutlined, EmailOutlined, Facebook, Instagram, RoomOutlined, Twitter } from "@material-ui/icons"
import "./footer.css"

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="left-footer">
                <h1 className="logoFooter">
                    ITADAKIMASU RAMEN
                </h1>
                <p className="descFooter">
                    ITADAKIMASU RAMEN is the first Japanese ramen shop which delivering nationally. People can enjoy the ramen anywhere they lived
                </p>
                <div className="socialContainerFooter">
                    <div className="socialIconFooter" style={{backgroundColor: '#4267B2'}}>
                        <Facebook />
                    </div>
                    <div className="socialIconFooter" style={{backgroundColor: '#1DA1F2'}}>
                        <Twitter />
                    </div>
                    <div className="socialIconFooter" style={{backgroundColor: '#e95950'}}>
                        <Instagram />
                    </div>
                </div>
            </div>
            <div className="center-footer">
                <h3 className="titleFooter">Links</h3>
                <ul className="listFooter">
                    <li className="listItemFooter">Home</li>
                    <li className="listItemFooter">Cart</li>
                    <li className="listItemFooter">Main Dish</li>
                    <li className="listItemFooter">Appatizer</li>
                    <li className="listItemFooter">Gifts</li>
                    <li className="listItemFooter">Merch</li>
                    <li className="listItemFooter">My Account</li>
                    <li className="listItemFooter">FAQ</li>
                </ul>
            </div>
            <div className="right-footer">
                <h3 className="titleFooter">Contact</h3>
                    <div className="contactItem">
                        <RoomOutlined style={{marginRight:'10px'}}/>
                        123/4 Somewhere Road 1, Bangkok 10400
                    </div>
                    <div className="contactItem">
                        <CallOutlined style={{marginRight:'10px'}}/>
                        (+66) 12 345 6789
                    </div>
                    <div className="contactItem">
                        <EmailOutlined style={{marginRight:'10px'}}/>
                        contact@itakimasu-ramen.com
                    </div>
            </div>
        </div>
    )
}
