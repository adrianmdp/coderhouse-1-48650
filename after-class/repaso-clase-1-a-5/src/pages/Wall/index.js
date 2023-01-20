import { useState } from "react"
import { AddPostForm, PostsList } from "../../components"

const publicacion1 = {
    title: "Publicacion 1",
    msg: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
}

const publicacion2 = {
    title: "Publicacion 2",
    msg: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
}

const Wall = () => {

    const [ posts, setPosts ] = useState([publicacion1, publicacion2])

    const addPost = (title, msg) => {

        setPosts([ ...posts, {title, msg} ])

    }

    return (
        <>
            <header>
                <h1>Clase de repaso</h1>
            </header>

            <main>
                <AddPostForm onSubmit={addPost} />

                <PostsList data={posts} />
            </main>

            <footer>

            </footer>
        
        </>
    )

}

export { Wall } 