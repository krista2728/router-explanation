import { useState } from "react";
import { dataHotel } from "./dataHotel";
import './App.css';

function Hotel() {

    const [hotels, setHotels] = useState(dataHotel);

    const [showText, setShowText] = useState(false); //Кнопка

    
    const removeHotel = (id) => {
        let newHotels = hotels.filter((hotel) => hotel.id !== id);
        setHotels(newHotels)
    }

    
    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
    }



    return <div>
    <div className="conttt">
    <h1 className="nyc"> NYC Top {hotels.length} HOTELS</h1>
    </div>

    
    {hotels.map((item => {
            const {id, hotelName, description, image, source, showMore } = item; //hotel меняем на  item




        return(
                <div key={id}>
                    <div className="conttt">
                    <h2 className="hotelN">{id} - {hotelName}</h2>
                    </div>

                    <div className="conttt">
                    <img src={image} width="500px" alt="hotel" />
                    </div>

                    <div className="conttt">
                    <p>{source}</p>
                    </div>

                    <div className="conttt">
                    <p>
                        {showMore ? description : description.substring(0, 170) + "...."}

                        <button onClick={() => showTextClick(item)}>{showMore ?  "Show less" : "Show more"}</button> 
                    
                    
                    </p>
                    </div>

                    <div className="conttt">
                    <button className="btn"onClick={() => removeHotel(id)}>Remove</button>
                    </div>

                </div>


        
            )


        }))}

    </div>
}

export default Hotel;