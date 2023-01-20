import { useState } from "react"
import { AddCommentForm } from "../../forms/AddCommnet"
import "./styles.css"

const Post = ({ title, msg }) => {

    const [msgs, setMsgs] = useState([])
    const [likes, setLikes] = useState(0)

    const addMsg = (comment) => {

        setMsgs([...msgs, { comment }])

    }

    return (
        <div className="post">
            <h3>{title}</h3>
            <p>
                {msg}
            </p>

            <button onClick={() => setLikes(likes+1)}>Me gusta ({likes})</button>

            <AddCommentForm onSubmit={addMsg} />

            <ul>
                {msgs.map(elem => <li>{elem.comment}</li>)}
            </ul>
        </div>
    )

}

export { Post }