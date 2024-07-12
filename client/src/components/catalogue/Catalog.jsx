import { useEffect, useState } from "react";


export default function Catalogue() {
    const {game, setGame} = useState([])
    useEffect({
        

    }, [])
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}
            
            {/* Display paragraph: If there is no games  */}
            <h3 className="no-articles">No articles yet</h3>
            
        </section>

    );
}