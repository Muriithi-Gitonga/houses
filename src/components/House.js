import React from "react";
import { Link } from "react-router-dom";

const House = ({id,image,location,price}) => {
    return (
        <article className="house">
            <div className="img-container">
                <img src={image} alt="houseimage"/>

            </div>
            <div className="house-footer">
                <h3>{location}</h3>
                <h4>{price}</h4>
            </div>
            <Link to={`/${id}`} className="btn btn-primary btn-detail">Details</Link>
        </article>
    )
}

export default House