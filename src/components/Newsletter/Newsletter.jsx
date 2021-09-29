import "./Newsletter.css"
import { Send } from "@material-ui/icons"

export default function Newsletter() {
    return (
        <div className="news-container">
            <h1 className="titleNews">Newsletter</h1>
            <div className="descNews">Get update for our new promotions or product</div>
            <div className="inputContainer">
                <input type="text" className="inputNews" placeholder="Your email"/>
                <button className="buttonNews">
                    <Send />
                </button>
            </div>
            
        </div>
    )
}
