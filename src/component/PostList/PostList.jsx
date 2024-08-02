import React from 'react';
import PostItem from "../PostItem/PostItem";

function PostList(props) {

    return (<div>
        <h1 style={{
            textAlign: "center"
        }}>Список постов</h1>
        {props.posts.map(post =>
            <PostItem post={post} key={post.id}/>
        )}

    </div>)

}

export default PostList;