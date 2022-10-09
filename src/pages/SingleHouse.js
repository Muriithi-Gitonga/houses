import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleHouse = () => {
    const {id } = useParams();
    const [singleHouse, setSingleHouse] = useState({})

    useEffect (() => {
        const fetchSingleHouse = async () =>{
            const data = await (await fetch(`http://localhost:8002/houses/${id}`)).json()
            console.log(data)
            if (data) {
                const {location, category, price, contact,} = data
                const newSingleHouse = {place:location, size:category, budget:price, contacts:contact }
                setSingleHouse((singleHouse) => newSingleHouse)

            } else {
                setSingleHouse(null)
            }

        } 
        fetchSingleHouse()
    }, [id])

    const {place} = singleHouse
    
    return (
        <section className="section cpcktail-section">
            <Link className="bt btn-primary" to='/'>back home</Link>
            <h2 className="section-title">{place}</h2>
        </section>
    )

}

export default SingleHouse