import React from "react";
import CustomButton from "./UI/button/CustomButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const router = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <CustomButton onClick={() => {
            router(`/posts/${props.post.id}`)
            console.log(`/posts/${props.post.id}`)
        }}>
          Open
        </CustomButton>
        <CustomButton onClick={() => props.remove(props.post)}>
          Remove
        </CustomButton>
      </div>
    </div>
  );
};

export default PostItem;
