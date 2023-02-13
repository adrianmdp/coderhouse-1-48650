import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../../../contexts"

const AddTask = () => {

    const [fields, setFields] = useState({title: "", subject: "", user: ""})

    const { id, name, lastname, setUserLoggedIn } = useContext(AuthContext)

    const hanldeSubmit = () => {
        // se debería crear una tarea
    }

    return(
        <>
            <form onSubmit={hanldeSubmit}>
                <div>
                    <label htmlFor="">Título</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        value={fields.title} 
                        onChange={e => setFields((prevState) => ({...prevState, title: e.target.value}))} />
                </div>
                <div>
                    <label htmlFor="">Asunto</label>
                    <input 
                        type="text" 
                        name="subject" 
                        id="subject"
                        value={fields.subject}
                        onChange={e => setFields((prevState) => ({...prevState, subject: e.target.value}))} />
                </div>
                <div>
                    <label htmlFor="">User</label>
                    <input type="text" name="user" id="user" disabled value={id} />
                </div>
                <button type="submit">Enviar</button>
            </form>
            <button onClick={() => setUserLoggedIn({name: "Lionel", lastname: "Messi", id: 10})}>
                Cambiar datos del usuario
            </button>
        </>
    )

}

export { AddTask }