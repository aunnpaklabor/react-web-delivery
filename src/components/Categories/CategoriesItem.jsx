import "./categories.css"

export default function CategoriesItem({item}) {
    return (
        <div className="categories-container">
            <div className="categoriesItemContainer">
                <img className="imgCat" 
                src={item.img} 
                alt="" />
                <div className="infoCat">
                    <div className="titleCat">{item.title}</div>
                    <button className="buttonCat">Order Now</button>
                </div>
            </div>
        </div>
    )
}
