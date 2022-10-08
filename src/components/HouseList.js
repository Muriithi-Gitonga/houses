import React from "react";
import House from "./House.js"

const HouseList = ({houses}) => {
    return (
        <section className="section">
            <h2 className="section-title">Houses on sale</h2>
            <div className="houses-center">
                {houses.map((house) => {
                    return (
                        <House 
                            key={house.id}
                            {...house}
                        />
                    )
                })}
            </div>
        </section>
    )

}

export default HouseList