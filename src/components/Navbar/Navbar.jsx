import "./navbar.css"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from "@material-ui/core"

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="wrapper">
                <div className="left">
                    <div className="language">
                        EN
                    </div>
                    <div className="searchContainer">
                        <input type="text" />
                        <Search style={{color:"gray", fontSize:17}}/>
                    </div>
                </div>
                <div className="center">
                    <h1>ITADAKIMASU RAMEN</h1>
                </div>
                <div className="right">
                    <div className="menu">REGISTER</div>
                    <div className="menu">LOG IN</div>
                    <div className="menu">
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlined />
                    </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}
