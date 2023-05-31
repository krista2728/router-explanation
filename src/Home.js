import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Books from "./Books";

function Home() {
    const [books, setBooks] = useState(data);
    
    const chosenBooks = (genre) => {
    const newBooks = data.filter(element =>
        element.genre === genre);
     setBooks(newBooks);       
    }

    return <div>
<div className="cont">
    <h2 className="color">КНИГИ ИЗМЕНИВШИЕ МИР</h2>
</div>

<Buttons filteredBooks = {chosenBooks} />
<Books anyBooks = {books} />

    </div>
}

export default Home;