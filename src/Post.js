function Post({id, title, date, handleEditPost, handleDeletePost}) {

  const onPostEdit = () => {
    const title = prompt('Enter post title');
    handleEditPost(id, title);
  }

  const onDelete = () => {
    handleDeletePost(id);
  }

  return (
    <>
      <p key={id}>{title} - {date.toLocaleTimeString()}</p>
      <button onClick={onPostEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
}

export default Post;
