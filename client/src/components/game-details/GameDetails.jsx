import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService"
import * as commentService from "../../services/commentService"

export default function GameDetails() {
    const {gameID} = useParams();
    const [game, setGame] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        gameService.getOne(gameID)
            .then(setGame)
        
        commentService.getAll()
            .then(setComments)
    }, [gameID])

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            gameID,
            formData.get('username'),
            formData.get('comment')
        )
        setComments(state => [...state, newComment])
        
    }
    
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>Bright</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
                </div>
                <p className="text">
                {game.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                {<div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(comment => (<li className="comment" key={comment._id}>
                    <p>{comment.username}: {comment.text}</p>
                    </li>))}
                    
                </ul>
                {comments.length === 0 && <p className="no-comment">No comments.</p>}
             
                </div>}
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                {/*<div className="buttons">
                <a href="#" className="button">
                    Edit
                </a>
                <a href="#" className="button">
                    Delete
                </a>
                </div> */}
            </div>
         
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
           <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input type="text" name="username" placeholder="username"/>
                    <textarea name="comment" placeholder="Comment......" defaultValue={""} />
                    <input className="btn submit" type="submit" defaultValue="Add Comment" />
                </form>
            </article>
        </section>


    );
}