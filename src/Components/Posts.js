import Share from './share/Share'
import './Styles/posts.css'
import Input from './input/Input'
const Posts = (props) =>{
    let users = props.users
    let post = props.post

   
    return (
        <div className="posts">
            <div className="postWrapper">
                <Share createPost={props.createPost}/>
                <Input users={users} post ={post} updatePost={props.updatePost}/>
            </div>
        </div>
    )
}

export default Posts