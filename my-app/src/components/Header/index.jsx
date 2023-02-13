import { useContext } from "react"
import { AuthContext } from "../../contexts"

const Header = () => {

    const { id, name, lastname } = useContext(AuthContext)

    return (

        <header>
            <div className="logo"></div>

            <nav>
                <ul>
                    <li>
                        <a href=""></a>
                    </li>
                </ul>
            </nav>

            <nav>
                <ul>
                    <li>
                        Hola {`${name} ${lastname} (${id})`}
                    </li>
                    <li>
                        <a href="">Cart</a>
                    </li>
                </ul>
            </nav>
        </header>

    )

}

export { Header }