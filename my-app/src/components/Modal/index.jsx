import { useEffect, useState } from 'react'

export const Modal = () => {

    const [name, setName] = useState("")
    const [name2, setName2] = useState("")

    useEffect(() => {

        console.log('Funcion para1 que le paso al useEffect')

    }, [name])

    return (
        <div>
            Modal 
            <button onClick={() => setName("Adrián")}>Cambiar state</button>
            <button onClick={() => setName2("Enzo")}>Cambiar state</button>
        </div>
    )

}