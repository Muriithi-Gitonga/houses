import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleHouse = () => {
    const {id } = useParams();
    const [singleHouse, setSingleHouse] = useState({})

    useEffect (() => {
        const fetchSingleHouse = async () =>{
            const data = await (await fetch(`http://localhost:8002/houses/${id}`)).json()
            const {location, category, price,image, contact,} = data
            const newSingleHouse = {place:location, size:category, budget:price, contacts:contact, picture:image }
            setSingleHouse((singleHouse) => newSingleHouse)
        }
        fetchSingleHouse()
    }, [id])

    const {place,picture, size, budget, contacts} = singleHouse
    
    return (
        <section className="section house-section">
            <Link className="bt btn-primary" to='/'>back home</Link>
            <h2 className="section-title">{place}</h2>
            <div className="single-house">
                <img src={picture} alt='houseimage'/>
                <div className="single-house-info">
                <p>
                    <span className="singe-house-data">location: </span>
                    {place}
                 </p>
                 <p>
                    <span className="singe-house-data">size: </span>
                    {size}
                 </p>
                 <p>
                    <span className="singe-house-data">price: </span>
                    {budget}
                 </p>
                 <p>
                    <span className="singe-house-data">contact: </span>
                    {contacts}
                 </p>

                </div>
            </div>
        </section>
    )

}

export default SingleHouse