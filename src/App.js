import {useState, useEffect} from 'react';
import './App.css';
import AppHeader from './AppHeader';
import AppMain from './AppMain';
import AppFooter from './AppFooter';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [posts, setPosts] = useState([]);
  const [filterStr, setFilterStr] = useState('');

  useEffect(() => {
    setPosts([]);
  }, []);

  const handleAddPost = (title) => {
    const newPost = {
      id: uuidv4(),
      title: title,
      date: new Date()
    };
    setPosts([...posts, newPost]);
  };

  const handleEditPost = (id, title) => {
    const newPosts = [...posts];
    const postToBeEdited = newPosts.find(post => post.id === id);
    postToBeEdited.title = title;    
    setPosts(newPosts);
  }

  const handleDeletePost = (id) => {
    const newPosts = [...posts].filter(post => post.id !== id);
    setPosts(newPosts);
  }

  const handleFilter = (str) => {
    setFilterStr(str);
  }
  
  return (
    <div className="app">
      <AppHeader 
        handleAddPost={handleAddPost}
      />
      <AppMain
        posts={posts.filter(post => post.title.includes(filterStr))}
        handleAddPost={handleAddPost}
        handleEditPost={handleEditPost}
        handleDeletePost={handleDeletePost}
        handleFilter={handleFilter}
      />
      <AppFooter 
        postsCount={posts.length}
        handleAddPost={handleAddPost}
      />
    </div>
  );
}

export default App;




// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.setState(prev => prev + new Date())
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }


// const Clock = () => {
//   const [date, setDate] = useState(new Date())
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }