import React from 'react';
import PostItem from "../PostItem/PostItem";

function PostList(props, title) {
    console.log({props, title});
    return (<div>
        <h1 style={{
            textAlign: "center"
        }}>{props.title}</h1>
        {props.posts.map((post,idx) =>
            <PostItem number={idx + 1} post={post} key={post.id}/>
        )}

    </div>)

}

export default PostList;