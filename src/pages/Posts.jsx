import React, { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import CustomButton from "../components/UI/button/CustomButton";
import PostForm from "../components/PostForm";
import CustomModal from "../components/UI/CustomModal/CustomModal";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import CustomSelect from "../components/UI/select/CustomSelect";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
    console.log("Updates");
  }, [page, limit]);
  //fetchPosts in deps - making page unlimited updatable
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  //Getting post from child component
  const removePost = (post) => {
    setPosts(posts.filter((requiredPost) => requiredPost.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <CustomButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create a user
      </CustomButton>
      <CustomModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </CustomModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <CustomSelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Quantity of elements on the page"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Show All" }
        ]}
      />
      {postError && <h1>Error acquired: ${postError}</h1>}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="JS posts"
      />
      <div ref={lastElement} style={{ height: 20, background: "red" }} />
      {isPostsLoading && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
};

export default Posts;
