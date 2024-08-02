import Counter from "./component/Counter/Counter";
import ClassCounter from "./component/ClassCounter/ClassCounter";
import './component/style/App.css'
import PostItem from "./component/PostItem/PostItem";
import {useState} from "react";
import PostList from "./component/PostList/PostList";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "Python", body: "Description"},
        {id: 3, title: "C++", body: "Description"},
        {id: 4, title: "C#", body: "Description"},

    ]);
    return (
        <div className="App">
<PostList posts={posts}/>

        </div>
    );
}

export default App;
