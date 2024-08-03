import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

function PostForm({create}) {
    const [post, setPost] = useState({title: "", body: ""})
    function addNewPost(e) {
        e.preventDefault();
        // const newPost = {
        //     id: Date.now(),
        //     title,
        //     body,
        // }
        // setPosts([...posts, newPost])
        const newPost = {
            ...post, id: Date.now(),
        }
        create(newPost)
        // console.log(newPost)
        // console.log(bodyInputRef.current.value)

        // bodyInputRef.current.value = "";
        setPost({title: '', body: ''})

    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                // ref={bodyInputRef}
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
}

export default PostForm;