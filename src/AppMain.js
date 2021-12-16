import {useRef} from 'react';
import Post from './Post';

function AppMain({posts, handleEditPost, handleDeletePost, handleFilter}) {

  const inputRef = useRef();

  const renderPosts = (posts, handleFilter) => {
    return posts.map(post => (
      <Post 
        id={post.id}
        title={post.title}
        date={post.date}
        handleEditPost={handleEditPost}
        handleDeletePost={handleDeletePost}
      />
    ))
  }

  const onChange = () => {
    handleFilter(inputRef.current.value)
  }

  return (
    <main className="app-main">
      <input ref={inputRef} type='search' onChange={onChange} />
      {renderPosts(posts)}
    </main>
  );
}

export default AppMain;
