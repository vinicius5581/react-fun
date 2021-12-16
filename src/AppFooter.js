function AppFooter({handleAddPost, postsCount}) {

  const onAddPost = () => {
    handleAddPost('test footer');
  }

  return (
    <footer onClick={onAddPost} className="app-footer">
      footer - {postsCount} posts
    </footer>
  );
}

export default AppFooter;
