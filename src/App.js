import Counter from "./component/Counter/Counter";
import ClassCounter from "./component/ClassCounter/ClassCounter";
import './component/style/App.css'
import PostItem from "./component/PostItem/PostItem";
import {useRef, useState} from "react";
import PostList from "./component/PostList/PostList";
import MyButton from "./component/UI/button/MyButton";
import MyInput from "./component/UI/input/MyInput";


function App() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    // const bodyInputRef = useRef();
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "Python", body: "Description"},
        {id: 3, title: "C++", body: "Description"},
        {id: 4, title: "C#", body: "Description"},

    ]);
    function addNewPost(e) {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title: title,
            body: body,
        }
        setPosts([...posts, newPost])
        console.log(newPost)
        // console.log(bodyInputRef.current.value)

        // bodyInputRef.current.value = "";
        setTitle('')
        setBody('')
    }
    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    // ref={bodyInputRef}
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Список постов 1'}/>

        </div>
    );
}

export default App;
