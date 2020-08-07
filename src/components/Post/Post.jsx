// @flow
import React from "react";
import Button from "react-bootstrap/Button";

type Props = {
    title: string,
    text: string,
    createdAt: Date,
    onEdit: (id: number) => void,
    onDelete: (id: number) => void,
    categoryId?: number, 

};
const getDate = (date: Date) => `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
const getHour = (date: Date) => `${date.getHours()}:${date.getMinutes()}`;

const Post = (props: Props) => {
    const { title, text, createdAt, onEdit, onDelete, categoryId } = props; 
    let date = new Date(createdAt);

  return (
    <div className="post">
      <div className="post__header">
        <div>
          <div className="post__thumbnail">
            <img src="https://picsum.photos/id/237/80/80" />
            <span>{title}</span>
            <span>Posted date: {getDate(date)} at {getHour(date)}</span>
          </div>
        </div>
        <div className="post__actions">
          <Button variant="dark" onClick={onEdit}>Edit</Button>
          <Button variant="dark" onClick={onDelete}>Delete</Button>
        </div>
      </div>
      <div className="post__content">
        <p>
          {text}
        </p>
      </div>
      <div className="post__thumbnails">
        <img src="https://picsum.photos/id/237/100/100" />
        <img src="https://picsum.photos/id/237/100/100" />
        <img src="https://picsum.photos/id/237/100/100" />
      </div>
    </div>
  );
};
export default Post;
