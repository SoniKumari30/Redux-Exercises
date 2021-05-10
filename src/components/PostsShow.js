import React from 'react'
import { connect } from 'react-redux'

class PostsShow extends React.Component {
    render(){
        return (
            <div>
                {
                    this.props.post &&(
                        <div>
                            <h1>Post Show</h1>
                            <h2>USER NAME: </h2>
                            <p>{this.props.user.name}</p>

                            <h2>TITLE: </h2>
                            <p>{this.props.post.title}</p>

                            <h2>BODY: </h2>
                            <p>{this.props.post.body}</p>
                        </div>

                    )
                }
            </div>
        )
    }
} 
const mapStateToProps = (state, props) => {
    const post = state.posts.find(post => post.id == props.match.params.id)
    return{
        post,
        user: state.users.find(user => user.id)
    }
}
export default connect(mapStateToProps)(postsShow)