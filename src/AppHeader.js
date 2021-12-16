function AppHeader({handleAddPost}) {

  const onAddPost = () => {
    const title = prompt('Enter post title');
    handleAddPost(title);
  }

  return (
    <header className='app-header'>
      <button onClick={onAddPost}>+</button>
      <button>pp</button>
      <h1>Home</h1>
      <button>Settings</button>
      <button>Notifications</button>
    </header>
  );
}

export default AppHeader;
