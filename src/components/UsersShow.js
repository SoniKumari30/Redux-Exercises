import React from 'react'
import { connect } from 'react-redux'

class UsersShow extends React.Component{
    render(){
        return(
            <div>
                <h2>User Show: {this.props.user.id} </h2>
                <p>{this.props.user.name}</p>
                <p>{this.props.user.email}</p>
                <h3>Posts</h3>
                <ul>
                    {
                        this.props.posts.map((post, id) =>{
                            <li key = {post.id}>{post.title}</li>

                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapstateToProps = (state, props) => {
    const user = userId(state.users, props.match.params.id)
    const posts = userPost(state.posts, props.params.id)
    return{
        user,
        posts,

    }
}
export default connect(mapstateToProps)(usersShow)