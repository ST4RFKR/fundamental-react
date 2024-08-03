import Counter from "./component/Counter/Counter";
import ClassCounter from "./component/ClassCounter/ClassCounter";
import './component/style/App.css'
import PostItem from "./component/PostItem/PostItem";
import {useRef, useState} from "react";
import PostList from "./component/PostList/PostList";
import MyButton from "./component/UI/button/MyButton";
import MyInput from "./component/UI/input/MyInput";
import PostForm from "./component/PostForm/PostForm";


function App() {

    // const [title, setTitle] = useState("");
    // const [body, setBody] = useState("");
    // const bodyInputRef = useRef();
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "Python", body: "Description"},
        {id: 3, title: "C++", body: "Description"},
        {id: 4, title: "C#", body: "Description"},

    ]);
    function createPost (newPost) {
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title={'Список постов 1'}/>

        </div>
    );
}

export default App;
