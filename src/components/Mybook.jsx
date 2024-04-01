import Book from "../models/Book";
import Review from "./Review";

function Mybook(){
    let id=1;
    let myFavoriteBook=new Book("My favorite book","Author","Adventure",1000,["First review","Second review"]);

    return <div>
        <h1>My fvorite book</h1>
        <p>Title: {myFavoriteBook.title}</p>
        <p>Title: {myFavoriteBook.author}</p>
        <p>Title: {myFavoriteBook.genre}</p>
        <p>Title: {myFavoriteBook.pages}</p>
        <h2>Reviews</h2>
        <ul>
            {myFavoriteBook.rewiews.map((review)=><Review  key={++id} name={review}/>)}
        </ul>
    </div>

    
}

export default Mybook