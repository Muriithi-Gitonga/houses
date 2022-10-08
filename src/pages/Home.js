import React, { useEffect, useState } from "react";
import HouseForm from "../components/HouseForm"
import HouseList from "../components/HouseList"
import Loading from "../components/Loading"


const Home = () => {
    const [loading, setLoading] = useState(true)
    const [houses, setHouses] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:8002/houses")
        .then(r => r.json())
        .then(data => setHouses((houses) => data ))
        setLoading(false)
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <main>
            <HouseForm />
            <HouseList houses={houses}/>
        </main>
    )
}

export default Home