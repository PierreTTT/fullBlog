import { IPost } from "../../types/posts";
import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

interface IAllPostsProps {
  posts: IPost[];
}

function AllPosts(props: IAllPostsProps) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
