import "./menu.css"
import { SearchOutlined } from "@material-ui/icons"

export default function MenuItem({item}) {
    return (
        <div className="menuItemContainer">
            <img className="imgMenu"
            src={item.img} 
            alt="" />
            <div className="infoMenu">
                <div className="iconMenu">
                    <SearchOutlined />
                </div>
            </div>
        </div>
    )
}
