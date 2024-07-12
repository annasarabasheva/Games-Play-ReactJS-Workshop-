import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService"
import GameItem from "../catalogue/game-item/GameItem"


export default function Catalogue() {
    const [games, setGames] = useState([])

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result))
    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map(game => (<GameItem key={game._id}{...game}/>))}

            {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
            
            
        </section>

    );
}