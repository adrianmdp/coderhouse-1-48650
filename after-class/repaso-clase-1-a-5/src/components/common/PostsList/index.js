import { Post } from "../Post"

const PostsList = ({ data }) => {

    console.log(data)

    return (

        <div className="posts">

            {data.map(elem => {
                return <Post title={elem.title} msg={elem.msg} />
            })}

        </div>

    )

}

export { PostsList }