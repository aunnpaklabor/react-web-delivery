import "./categories.css"
import { categories } from "../../data"
import CategoriesItem from "./CategoriesItem"

export default function Categories() {
    return (
            <div className="categories-container">
                {categories.map(item=>(
                    <CategoriesItem item={item} key={item.id} />
                ))}
            </div>
    )
}
