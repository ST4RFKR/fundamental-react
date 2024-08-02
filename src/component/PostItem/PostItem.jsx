import React from 'react';
import {logDOM} from "@testing-library/react";

function PostItem(props) {
    console.log(props)
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}.{ props.post.title}</strong>
                <div className="post__text">
                    {props.post.body}
                </div>
            </div>
            <button className="post_btns">
                Удалить
            </button>
        </div>
    );
}

export default PostItem;