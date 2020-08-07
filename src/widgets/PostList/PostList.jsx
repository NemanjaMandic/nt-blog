// @flow
import React from "react";
import Post from "../../components/Post";

type Props = {
  posts: Array<any>,
  onEdit: (id: number) => void,
  onDelete: (id: number) => void,
};
const PostList = (props: Props) => {
  const { posts, onEdit, onDelete } = props;
  return (
    posts &&
    posts.map((post) => (
      <Post {...post} key={post.id} onEdit={onEdit} onDelete={onDelete} />
    ))
  );
};

export default PostList;
