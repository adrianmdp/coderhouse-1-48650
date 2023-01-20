import { useState } from "react"

const AddPostForm = ({ onSubmit }) => {

    const [title, setTitle] = useState("")
    const [msg, setMsg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        onSubmit(title, msg)
    }

    return(
        <>
            <h2>Agregar publicación</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Títlo</label>
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Mensaje</label>
                    <textarea name="msg" onChange={e => setMsg(e.target.value)} value={msg}>{msg}</textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export { AddPostForm }