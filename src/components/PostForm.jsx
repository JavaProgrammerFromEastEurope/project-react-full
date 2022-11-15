import React, { useRef, useState } from "react";
import CustomButton from "./UI/button/CustomButton";
import CustomInput from "./UI/input/CustomInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" }
  ]);

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(bodyInputRef.current.value);
    setPosts([...posts, { ...post, id: Date.now() }]);
    const newPost = {
      ...post,
      id: Date.now()
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      {/* Controlled Component */}
      <CustomInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post Title"
      />
      {/* Uncontrolled Component - uses 'Ref'*/}
      <CustomInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        ref={bodyInputRef}
        type="text"
        placeholder="Description"
      />
      <CustomButton onClick={addNewPost}>Create a post</CustomButton>
    </form>
  );
};

export default PostForm;
