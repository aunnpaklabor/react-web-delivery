import Annoucement from "../../components/Annoucement/Annoucement"
import Menu from "../../components/Menu/Menu"
import Navbar from "../../components/Navbar/Navbar"
import Newsletter from "../../components/Newsletter/Newsletter"
import Footer from "../../components/Footer/Footer"
import "./ProductList.css"

export default function ProductList() {
    return (
        <div className="productList-container">
            <Annoucement />
            <Navbar />
             <h1 className="titleProductList">Products</h1>
            <div className="filterContainer">
                <div className="filterContainerItem">
                    <span className="filterText">
                        Filter Product:
                    </span>
                    <select name="filter" id="filter" className="filterSelect">
                        <option value="filter" className="filterOption" disabled selected>Filter</option>
                        <option value="mainDish" className="filterOption">Main Dish</option>
                        <option value="appatizer" className="filterOption">Appatizer</option>
                        <option value="gifts" className="filterOption">Gifts</option>
                        <option value="merch" className="filterOption">Merch</option>
                    </select>
                </div>
                <div className="filterContainerItem">
                    <span className="filterText">
                        Sort Product:
                    </span>
                    <select name="sort" id="sort" className="filterSelect">
                        <option value="featured" className="filterOption">Featured</option>
                        <option value="bestseller" className="filterOption">Best Selling</option>
                        <option value="low" className="filterOption">Price, low to high</option>
                        <option value="high" className="filterOption">Price, high to low</option>
                    </select>
                    
                </div>
            </div>
            <Menu />
            <Newsletter />
            <Footer />
        </div>
    )
}
