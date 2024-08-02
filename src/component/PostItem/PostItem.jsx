import React from 'react';
import {logDOM} from "@testing-library/react";
import MyButton from "../UI/button/MyButton";

function PostItem(props) {
    console.log(props)
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}.{ props.post.title}</strong>
                <div className="post__text">
                    {props.post.body}
                </div>
            </div>
            <MyButton className="post_btns">
                Удалить
            </MyButton>
        </div>
    );
}

export default PostItem;