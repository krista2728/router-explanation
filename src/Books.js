function Books({anyBooks}) {
    return <div className="products">
        {anyBooks.map((element => {
            const {id, name, author, years, genre, image} = element;

            return <div className="product-card" key={id}>
                <img src={image} width="200px" height="300px" alt="book"/>
                <div className="product-info" >
                    <p className="color">{author}</p>
                    <p className="color">{name}</p>
                    <p className="color">{years}</p>
                    <p className="color">{genre}</p>


                </div>


            </div>
        }))}


    </div>

}

export default Books;