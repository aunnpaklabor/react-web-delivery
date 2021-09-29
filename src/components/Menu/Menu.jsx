import "./menu.css"
import { menu } from "../../data"
import MenuItem from "./MenuItem"

export default function Menu() {
    return (
        <div className="menu-container">
            {menu.map(item=>(
                <MenuItem item={item} key={item.id} />
            ))}
        </div>
    )
}
