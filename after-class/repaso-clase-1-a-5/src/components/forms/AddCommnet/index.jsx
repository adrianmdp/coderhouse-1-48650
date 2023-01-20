import { useState } from "react"

const AddCommentForm = ({ onSubmit }) => {

    const [ comment, setComment ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        onSubmit(comment)

    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Comentario</label>
                <input type="text" name="comment" value={comment} onChange={e => setComment(e.target.value)} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export { AddCommentForm }