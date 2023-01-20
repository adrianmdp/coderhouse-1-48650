import { useState } from "react"
import "./styles.css"


export const Button = ({children, className, type, icon}) => {

    const [isActive, setIsActive] = useState(false)

    console.log('isActive', isActive)

    const fx = () => {

        setIsActive(!isActive)

    }

    return (
        <button 
            className={`${className} ${isActive ? 'btn-primary' : 'btn-disabled'} `} 
            type={type}
            onClick={fx}
        >
            {children} {icon} {isActive ? 'El botón esta activo' : 'El botón no esta activo'}
        </button>
    )


} 
